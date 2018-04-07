// Project module constants

export const GENERATE_ROUTE = '/api/generate'

export const DEFAULT_PROJECT = {
  label: 'DEFAULT_LABEL',
  identifier: '',
  schemas: [],
  stack: {
    server: {
      id: 'expressjs'
    },
    client: {
      id: 'vuejs'
    },
    database: {
      id: 'mongodb'
    },
    features: [],
    deployments: []
  }
}

export const DEFAULT_USER_SCHEMA = {
  _id: null,
  enabled: true,
  label: 'User',
  label_plural: 'Users',
  identifier: 'user',
  identifier_plural: 'users',
  unqiue_id_prefix: 'US_',
  authentications: [],
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
      preferred: true
    },
    {
      order: 1,
      label: 'E-Mail',
      help: 'E-Mail address associated with this Contact.',
      required: true,
      unique: false,
      preferred: false,
      datatype: 'TEXT',
      datatypeOptions: {},
      identifier: 'email',
      _id: 'attr_26577092992831'
    }
  ]
}
