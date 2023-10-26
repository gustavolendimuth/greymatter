import { defineField } from 'sanity';

export default defineField({
  name: 'categories',
  type: 'array',
  description: `Aperte a tecla enter a cada nova categoria.`,
  of: [{ type: 'string' }],
});
