/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { definePlugin, type DocumentDefinition } from 'sanity';
import { StructureBuilder, type StructureResolver } from 'sanity/desk';
import author from 'schemas/documents/author';
import siteSettings from 'schemas/documents/siteSettings';

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => ({
  name: 'settings',
  document: {
    // Hide 'Settings' from new document options
    // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== type);
      }

      return prev;
    },
    // Removes the "duplicate" action on the "settings" singleton
    actions: (prev, { schemaType }) => {
      if (schemaType === type) {
        return prev.filter(({ action }) => action !== 'duplicate');
      }

      return prev;
    },
  },
}));

const simpleDocs = [] as DocumentDefinition[];

const simpleStructure = (types: DocumentDefinition[], S:StructureBuilder) => types.map((type) => S.listItem()
  .title(type.title)
  .icon(type.icon)
  .child(
    S.editor()
      .id(type.name)
      .schemaType(type.name)
      .documentId(type.name),
  ));

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (
  typeDef: DocumentDefinition,
): StructureResolver => (S) => {
  // The `Settings` root list item
  const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
    S.listItem()
      .title(typeDef.title)
      .icon(typeDef.icon)
      .child(
        S.editor()
          .id(typeDef.name)
          .schemaType(typeDef.name)
          .documentId(typeDef.name),
      );

  // The default root list items (except custom ones)
  const defaultListItems = S.documentTypeListItems().filter(
    (listItem) => {
      const id = listItem.getId();
      return id && ![
        author.name,
        typeDef.name,
        siteSettings.name,
      ].includes(id);
    },
  );

  return S.list()
    .title('Content')
    .items([
      ...(simpleStructure([siteSettings as DocumentDefinition], S)),
      settingsListItem,
      S.divider(),
      ...(simpleStructure(simpleDocs, S)),
      ...defaultListItems,
    ]);
};
