import { defineField } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

const title = 'Título da Seção';

export default
defineField({
  name: 'title',
  title: 'Título da Seção',
  type: 'internationalizedArrayString',
  validation: (rule) => fullValidation({ rule, title, languages }),
});
