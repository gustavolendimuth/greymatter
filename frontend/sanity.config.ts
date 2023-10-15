import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import {
  apiVersion,
  dataset,
  projectId,
} from 'lib/sanity.api';
import { customStructure, hiddenOptions } from 'plugins/customStructure';
import { hideOptionsPlugin } from 'plugins/hideOptionsPlugin';
import { previewDocumentNode } from 'plugins/previewPane';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import { schemaTypes } from 'schemas/schemaTypes';

export const languages = [
  { id: 'pt-br', title: 'Português' },
  { id: 'en', title: 'English' },
];

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Grey Matter',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool({
      structure: customStructure(),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    // @ts-ignore
    ...hideOptionsPlugin(hiddenOptions),
    // Add the "Open preview" action
    // previewUrl({
    //   base: DRAFT_MODE_ROUTE,
    //   urlSecretId: previewSecretId,
    //   matchTypes: [postType.name, settingsType.name],
    // }),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
    internationalizedArray({
      languages,
      // defaultLanguages: ['pt-br'],
      fieldTypes: ['string', 'text', 'blogDescription', 'postContent', 'richText', 'heroVideo'],
      buttonAddAll: false,
    }),
  ],
});
