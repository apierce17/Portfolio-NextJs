import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';

export type Type = {
  name: string
  type: string
  time: string 
  tech: string
  desc: string
  demo: string
  github: string
  deployed: string
  slug: string
  image?: MediaType
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: (): boolean => true, // Everyone can read projects
  },
  fields: [
    {
      name: 'name',
      label: 'Project Name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Type (Personal, Work, etc)',
      type: 'text',
      required: true,
    },
    {
      name: 'time',
      label: 'Time',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tech',
      label: 'Technologies',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'desc',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'demo',
      label: 'Demo Link',
      type: 'text',
      required: false,
    },
    {
      name: 'github',
      label: 'Github Link',
      type: 'text',
      required: false,
    },
    {
      name: 'deployed',
      label: 'Deployed Link',
      type: 'text',
      required: false,
    },
  ],
};

export default Projects;
