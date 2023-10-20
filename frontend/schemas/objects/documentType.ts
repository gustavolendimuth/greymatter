import { defineField } from 'sanity';

export default (type: string) =>
  defineField({
    name: 'type',
    type: 'string',
    hidden: true,
    initialValue: type,
  });
