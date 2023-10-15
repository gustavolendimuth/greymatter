/* eslint-disable import/prefer-default-export */
import { definePlugin, PluginOptions } from 'sanity';

export const hideOptionsPlugin = definePlugin<string[]>((types): PluginOptions[] => types.map((type) => (
  {
    name: 'settings',
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type);
        }

        return prev;
      },
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate' && action !== 'unpublish');
        }

        return prev;
      },
    },
  }
)));
