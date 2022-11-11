import { CollectionConfig } from 'payload/types';

export type Type = {
  name: string
  pone: string
  ptwo: string
  pthree: string 
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: (): boolean => true, // Everyone can read posts
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'pone', // required
      label: 'Paragraph One',
      type: 'textarea', // required
      required: false,
    },
    {
      name: 'ptwo', // required
      label: 'Paragraph Two',
      type: 'textarea', // required
      required: false,
    },
    {
      name: 'pthree', // required
      label: 'Paragraph Three',
      type: 'textarea', // required
      required: false,
    }
  ],
};

export default Posts;
