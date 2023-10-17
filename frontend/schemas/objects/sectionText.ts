import { defineField } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

export default defineField({
  name: 'text',
  type: 'internationalizedArrayRichText',
  title: 'Texto da Seção',
  validation: (rule) => fullValidation({ rule, title: 'Texto da Seção', languages }),
});
