// Blueprint module constants
export const DEFAULT_BLUEPRINT = {
  _id: null,
  label: 'Codotype Project',
  identifier: 'codotype_project',
  schemas: []
}

export const DEFAULT_USER_SCHEMA = {
  _id: null,
  order: 0,
  label: 'User',
  label_plural: 'Users',
  identifier: 'user',
  identifier_plural: 'users',
  class_name: 'User',
  class_name_plural: 'Users',
  attributes: [
    {
      _id: 'attr_26577092992831', // TODO - rename '_id' to 'id'
      order: 0,
      label: 'E-Mail',
      identifier: 'email',
      help: 'The E-Mail address associated with this User',
      required: true,
      unique: true,
      datatype: 'TEXT', // TODO - import DATATYPE_STRING from @codotype/datatypes
      datatypeOptions: {},
      locked: true
    }
  ],
  relations: []
}

// TODO - use this, or remove this
export const CREATE_SUCCESS_NOTIFICATION = {
  message: ':slow clap:',
  context: 'success',
  dismissible: true
}
