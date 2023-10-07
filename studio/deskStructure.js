import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      // Add other list items here, for example:
      // S.listItem()
      //   .title('Blog Posts')
      //   .child(S.documentTypeList('post').title('Blog Posts')),
      ...S.documentTypeListItems().filter(
        listItem => !['author', 'category'].includes(listItem.getId())
      ),
    ]);
