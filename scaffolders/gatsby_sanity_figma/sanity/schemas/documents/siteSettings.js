import { MdSettings } from 'react-icons/md';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* , 'create', 'delete' */],
  icon: MdSettings,
  initialValue: {
    title: 'Site title',
    description: 'Some description'
  },
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
