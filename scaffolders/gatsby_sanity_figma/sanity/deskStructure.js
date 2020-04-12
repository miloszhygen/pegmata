import S from '@sanity/desk-tool/structure-builder';
import {
  MdSettings,
} from 'react-icons/md';

const hiddenTypes = [
  'siteSettings',
];

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Innstillinger nettsted')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),


      S.divider(),


      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
