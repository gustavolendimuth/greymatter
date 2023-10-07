import { colorInput } from '@sanity/color-input';
import { crossDatasetDuplicator } from '@sanity/cross-dataset-duplicator';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

const deskToolParams = {
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        ...S.documentTypeListItems().filter(
          listItem => !['author', 'category'].includes(listItem.getId())
        ),
      ])
}

const internationalizedArrayParams = {
  languages: [
    { id: 'pt-br', title: 'Português' },
    { id: 'en', title: 'English' }
  ],
  defaultLanguages: ['pt-br'],
  fieldTypes: ['string', 'text'],
}

export default defineConfig([
  {
    name: 'default',
    title: 'Grey Matter',

    projectId: 'yhcu3nao',
    dataset: 'production',

    plugins: [deskTool(), colorInput()],
    schema: {
      types: schemaTypes,
    },
    basePath: '/principal',
  },
  {
    name: 'preview',
    title: 'Grey Matter Preview',
    projectId: 'yhcu3nao',
    dataset: 'preview',
    plugins: [deskTool(deskToolParams), visionTool(), colorInput(), crossDatasetDuplicator(), internationalizedArray(internationalizedArrayParams)],
    schema: {
      types: schemaTypes,
    },
    basePath: '/preview',
  },
]);
