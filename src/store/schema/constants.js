
export const DEFAULT_USER_SCHEMA = {
  _id: null,
  label: 'User',
  label_plural: 'Users',
  identifier: 'user',
  identifier_plural: 'users',
  unqiue_id_prefix: 'CT_',
  authentications: [],
  display: {
    navbar_link: true,
    icon: 'fa-user-circle-o'
  },
  attributes: [
    {
      order: 0,
      label: 'Name',
      help: 'Name of the individual',
      required: false,
      datatype: 'TEXT',
      datatypeOptions: {},
      identifier: 'name',
      unique: true,
      _id: 'attr_1',
      preferred: true,
      col_span: '4'
    },
    {
      order: 1,
      label: 'E-Mail',
      help: 'E-Mail address associated with this Contact.',
      required: true,
      unique: false,
      preferred: false,
      col_span: '4',
      datatype: 'TEXT',
      datatypeOptions: {},
      identifier: 'email',
      _id: 'attr_26577092992831'
    }
  ]
}
