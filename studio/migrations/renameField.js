/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { getCliClient } from '@sanity/cli';
// Executar com o comando:
// npx sanity exec migrations/renameField.ts --with-user-token

// Gets the client configuration from `sanity.cli.ts` and returns a client.
// Will include write token when run with `sanity exec --with-user-token`
const client = getCliClient();

// Fetch the documents we want to migrate, and return only the fields we need.
const fetchDocuments = () => client.fetch('*[_type == \'author\' && defined(name)][0...100] {_id, _rev, name}');

// Build a patch for each document, represented as a tuple of `[documentId, patch]`
const buildPatches = (docs) => docs.map(
  (doc) => ({
    id: doc._id,
    patch: {
      set: { fullname: doc.name },
      unset: ['name'],
      // this will cause the migration to fail if any of the documents has been
      // modified since it was fetched.
      ifRevisionID: doc._rev,
    },
  }),
);

const createTransaction = (patches) => patches.reduce(
  (tx, patch) => tx.patch(patch.id, patch.patch),
  client.transaction(),
);

const commitTransaction = (tx) => tx.commit();

const migrateNextBatch = async () => {
  const documents = await fetchDocuments();
  const patches = buildPatches(documents);
  if (patches.length === 0) {
    console.log('No more documents to migrate!');
    process.exit(1);
  }
  console.log(
    'Migrating batch:\n %s',
    patches.map((patch) => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n'),
  );
  const transaction = createTransaction(patches);
  await commitTransaction(transaction);
  return migrateNextBatch();
};

migrateNextBatch().catch((err) => {
  console.error(err);
  process.exit(1);
});
