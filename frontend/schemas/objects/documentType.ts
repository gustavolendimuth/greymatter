import { defineField } from 'sanity';

/* eslint-disable import/no-anonymous-default-export */
export default (type) => (defineField({
  name: 'type',
  type: 'string',
  hidden: true,
  initialValue: type,
}));
