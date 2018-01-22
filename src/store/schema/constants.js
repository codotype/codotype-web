
export const DEFAULT_USER_SCHEMA = {
  _id: null,
  label: 'User',
  label_plural: 'Users',
  identifier: 'user',
  identifier_plural: 'users'
  unqiue_id_prefix: 'CT_',
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
      order: 2,
      label: 'Phone Number',
      help: 'Phone number of the individual',
      required: false,
      datatype: 'PHONE_NUMBER',
      datatypeOptions: {},
      identifier: 'phone',
      _id: 'attr_3',
      col_span: '4'
    },
    {
      order: 3,
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
    },
    {
      order: 4,
      label: 'Address',
      help: 'Address for this contact',
      required: false,
      unique: false,
      preferred: false,
      col_span: 12,
      datatype: 'HAS_ONE',
      datatypeOptions: {
        schema_id: 'schema_14808974981067'
      },
      identifier: 'address_id',
      _id: 'attr_63003613597957'
    },
    {
      order: 5,
      label: 'Invoices',
      help: 'Invoices associated with this person',
      required: false,
      unique: false,
      preferred: false,
      col_span: 12,
      datatype: 'HAS_MANY',
      datatypeOptions: {
        schema_id: 'schema_22881179555990'
      },
      identifier: 'invoice_ids',
      _id: 'attr_37727300204170'
    },
    {
      order: 7,
      label: 'Jobs',
      help: 'Jobs worked',
      required: false,
      unique: false,
      preferred: false,
      col_span: 12,
      datatype: 'HAS_MANY',
      datatypeOptions: {
        schema_id: 'schema_85414304137721'
      },
      identifier: 'job_ids',
      _id: 'attr_63065825981008'
    }
  ]
}
