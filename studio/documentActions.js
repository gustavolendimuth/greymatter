import defaultResolve from 'part:@sanity/base/document-actions';
import { DuplicateToAction } from '@sanity/cross-dataset-duplicator';
import config from 'config:@sanity/cross-dataset-duplicator';

export default function resolveDocumentActions(props) {
  const defaultActions = defaultResolve(props);

  // This will look through the "types" array in your migration.json config file
  // If the type of this document is found in that array, the Migrate Action will show
  if (config?.types?.length && config.types.includes(props.type)) {
    return [...defaultActions, DuplicateToAction];
  }

  // ...all your other document action code

  return defaultActions;
}
