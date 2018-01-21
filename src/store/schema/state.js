
// Schema Module State
const state = {
  collection: [
    {
      label: 'Contact',
      identifier: 'contact',
      _id: 'schema_29321443037762',
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
      ],
      label_plural: 'Contacts',
      identifier_plural: 'contacts'
    },
    {
      label: 'Invoice',
      identifier: 'invoice',
      _id: 'schema_22881179555990',
      unqiue_id_prefix: 'IV_',
      display: {
        navbar_link: true,
        icon: 'fa-usd'
      },
      attributes: [
        {
          order: 0,
          label: 'Invoice ID',
          help: 'Unique Invoice ID',
          required: true,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'invoice_id',
          unique: true,
          col_span: '6',
          _id: 'attr_5'
        },
        {
          order: 1,
          label: 'Contact',
          help: 'Contact to whom the invoice has been sent.',
          required: true,
          datatype: 'BELONGS_TO',
          datatypeOptions: {
            schema_id: 'schema_29321443037762',
            schema_attribute_identifier: 'name'
          },
          identifier: 'contact_id',
          col_span: '6',
          _id: 'attr_1'
        },
        {
          order: 2,
          label: 'Amount',
          help: 'The amount of USD for the invoice',
          required: true,
          datatype: 'NUMBER',
          datatypeOptions: {},
          identifier: 'amount',
          col_span: '4',
          _id: 'attr_2'
        },
        {
          order: 3,
          label: 'Date',
          help: 'Date the invoice was sent out.',
          required: true,
          datatype: 'DATE',
          datatypeOptions: {},
          identifier: 'date',
          col_span: '4',
          _id: 'attr_4'
        },
        {
          order: 4,
          label: 'Payment Received',
          help: 'Indicates whether or not payment has been received.',
          required: false,
          datatype: 'BOOL',
          datatypeOptions: {},
          identifier: 'payment_received',
          col_span: '4',
          _id: 'attr_3'
        }
      ],
      label_plural: 'Invoices',
      identifier_plural: 'invoice'
    },
    {
      label: 'Job',
      identifier: 'job',
      _id: 'schema_85414304137721',
      unqiue_id_prefix: 'JB_',
      display: {
        navbar_link: true,
        icon: 'fa-list-alt'
      },
      attributes: [
        {
          order: 1,
          label: 'Job ID',
          help: 'Unique ID',
          required: true,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'job_id',
          unique: true,
          col_span: 6,
          _id: 'attr_1'
        },
        {
          order: 2,
          label: 'Contact',
          help: 'Contact for whom the Job is being done',
          required: true,
          datatype: 'BELONGS_TO',
          datatypeOptions: {
            schema_id: 'schema_29321443037762',
            schema_attribute_identifier: 'name'
          },
          identifier: 'contact_id',
          col_span: 6,
          _id: 'attr_2'
        },
        {
          order: 3,
          label: 'Invoice',
          help: 'Invoice for this Job',
          required: false,
          datatype: 'BELONGS_TO',
          datatypeOptions: {
            schema_id: 'schema_22881179555990',
            schema_attribute_identifier: 'invoice_id'
          },
          identifier: 'invoice_id',
          col_span: 6,
          _id: 'attr_3'
        },
        {
          order: 4,
          label: 'Status',
          help: 'Status of the Job',
          required: false,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'status',
          col_span: 6,
          _id: 'attr_4'
        }
      ],
      label_plural: 'Jobs',
      identifier_plural: 'jobs'
    },
    {
      _id: 'schema_14808974981067',
      label: 'Address',
      label_plural: 'Addresses',
      identifier: 'address',
      identifier_plural: 'addresses',
      attributes: [
        {
          order: 1,
          label: 'Street Address',
          help: 'Street Address (i.e. 123 Main St.)',
          required: true,
          unique: false,
          col_span: 6,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'street_address',
          _id: 'attr_72437938398278'
        },
        {
          order: 2,
          label: 'Street Address 2',
          help: 'Apartment or Suite # (i.e. Apt. 1)',
          required: false,
          unique: false,
          col_span: 6,
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'street_address_two',
          _id: 'attr_79838196774464'
        },
        {
          order: 3,
          label: 'City',
          help: 'City the address resides in',
          required: true,
          unique: false,
          col_span: '4',
          datatype: 'TEXT',
          datatypeOptions: {},
          identifier: 'city',
          _id: 'attr_28081761172432'
        },
        {
          order: 4,
          label: 'State',
          help: 'State the city resides in',
          required: true,
          unique: false,
          col_span: '4',
          datatype: 'TEXT_SELECT',
          datatypeOptions: {
            dropdownOptions: [
              'Alabama',
              'Alaska',
              'Arizona',
              'Arkansas',
              'California',
              'Colorado',
              'Connecticut',
              'Delaware',
              'District Of Columbia',
              'Florida',
              'Georgia',
              'Hawaii',
              'Idaho',
              'Illinois',
              'Indiana',
              'Iowa',
              'Kansas',
              'Kentucky',
              'Louisiana',
              'Maine',
              'Maryland',
              'Massachusetts',
              'Michigan',
              'Minnesota',
              'Mississippi',
              'Missouri',
              'Montana',
              'Nebraska',
              'Nevada',
              'New Hampshire',
              'New Jersey',
              'New Mexico',
              'New York',
              'North Carolina',
              'North Dakota',
              'Ohio',
              'Oklahoma',
              'Oregon',
              'Pennsylvania',
              'Rhode Island',
              'South Carolina',
              'South Dakota',
              'Tennessee',
              'Texas',
              'Utah',
              'Vermont',
              'Virginia',
              'Washington',
              'West Virginia',
              'Wisconsin',
              'Wyoming'
            ]
          },
          identifier: 'state',
          _id: 'attr_27558409417743'
        },
        {
          order: 5,
          label: 'Zip Code',
          help: 'Zip Code of the address',
          required: true,
          unique: false,
          col_span: '4',
          datatype: 'NUMBER',
          datatypeOptions: {},
          identifier: 'zip_code',
          _id: 'attr_53043500828843'
        }
      ],
      display: {
        icon: 'fa-home',
        navbar_link: false
      },
      unqiue_id_prefix: 'AD_'
    }
  ],
  selectedAttribute: null
}

export default state
