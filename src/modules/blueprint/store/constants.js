// Project module constants
export const DEFAULT_PROJECT = {
  _id: null,
  label: 'Codotype Project',
  identifier: 'codotype_project',
  schemas: [],
  seeds: [] // QUESTION - remove seeds?
}

export const DEFAULT_USER_SCHEMA = {
  _id: null,
  enabled: true,
  label: 'User',
  label_plural: 'Users',
  identifier: 'user',
  identifier_plural: 'users',
  class_name: 'User',
  class_name_plural: 'Users',
  attributes: [
    {
      order: 0,
      label: 'Username',
      help: 'The user\'s username',
      required: true,
      unique: true,
      datatype: 'TEXT',
      datatypeOptions: {},
      identifier: 'username',
      _id: 'attr_265770dpskks31',
      locked: true
    },
    {
      order: 1,
      label: 'E-Mail',
      help: 'E-Mail address associated with this Contact.',
      required: true,
      unique: true,
      datatype: 'TEXT',
      datatypeOptions: {},
      identifier: 'email',
      _id: 'attr_26577092992831',
      locked: true
    }
  ],
  relations: []
}

export const CREATE_SUCCESS_NOTIFICATION = {
  message: ':slow clap:',
  context: 'success',
  dismissible: true
}
