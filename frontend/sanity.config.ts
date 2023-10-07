/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import {
  apiVersion,
  dataset,
  projectId,
} from 'lib/sanity.api';
import { previewDocumentNode } from 'plugins/previewPane';
import { settingsPlugin, settingsStructure } from 'plugins/settings';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import settingsType from 'schemas/documents/blogSettings';
import { schemaTypes } from 'schemas/schemaTypes';

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io';

export const languages = [
  { id: 'en', title: 'English' },
  { id: 'pt-br', title: 'Português' },
];

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: schemaTypes,
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    // previewUrl({
    //   base: DRAFT_MODE_ROUTE,
    //   urlSecretId: previewSecretId,
    //   matchTypes: [postType.name, settingsType.name],
    // }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
    internationalizedArray({
      languages,
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text', 'blogDescription', 'postContent', 'richText'],
    }),
  ],
});
