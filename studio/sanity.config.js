import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { schemaTypes } from './schemas';
import { crossDatasetDuplicator } from '@sanity/cross-dataset-duplicator';

export default defineConfig([
  {
    name: 'default',
    title: 'Grey Matter Principal',

    projectId: 'yhcu3nao',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), colorInput(), crossDatasetDuplicator()],
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
    plugins: [deskTool(), visionTool(), colorInput(), crossDatasetDuplicator()],
    schema: {
      types: schemaTypes,
    },
    basePath: '/preview',
  },
]);
