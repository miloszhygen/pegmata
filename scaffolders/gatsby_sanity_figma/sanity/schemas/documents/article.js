import { MdTextFields } from 'react-icons/md';

export default {
  name: 'article',
  title: 'Artikkel',
  type: 'document',
  icon: MdTextFields,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-en blir /artikkel/ + slug',
      options: {
        source: doc => doc.title,
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Innhold',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
};
