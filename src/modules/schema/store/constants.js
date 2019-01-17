
// Schema constants
export const DEFAULT_SCHEMA = {
  _id: null,
  order: 0,
  label: '',
  label_plural: '',
  identifier: '',
  identifier_plural: '',
  class_name: '',
  class_name_plural: '',
  relations: [],
  attributes: [
    {
      order: 0,
      label: 'Label',
      identifier: 'label',
      help: '',
      required: true,
      unique: true,
      datatype: 'TEXT',
      datatypeOptions: {}
    }
  ]
}

// TODO - these should be abstracted into @codotype/util
export const RELATION_TYPE_BELONGS_TO = 'BELONGS_TO'
export const RELATION_TYPE_HAS_ONE = 'HAS_ONE'
export const RELATION_TYPE_HAS_MANY = 'HAS_MANY'

// TODO - these should be abstracted into @codotype/util
export const RELATION_TYPES = [
  { id: RELATION_TYPE_BELONGS_TO, label: 'Belongs To', description: 'A two-way association to a single model' },
  { id: RELATION_TYPE_HAS_ONE, label: 'Has One', description: 'A one-way association to a single model' },
  { id: RELATION_TYPE_HAS_MANY, label: 'Has Many', description: 'A one-way association to many models' }
]

// Datattype IDs
// TODO - these are duplicated in the Option store
// TODO - these should be abstracted into @codotype/util
export const DATATYPE_TEXT = 'TEXT'
export const DATATYPE_STRING = 'STRING'
export const DATATYPE_STRING_SELECT = 'STRING_SELECT'
export const DATATYPE_STRING_ARRAY = 'STRING_ARRAY'
export const DATATYPE_NUMBER = 'NUMBER'
export const DATATYPE_NUMBER_INTEGER = 'NUMBER_INTEGER'
export const DATATYPE_NUMBER_FLOAT = 'NUMBER_FLOAT'
export const DATATYPE_NUMBER_DOUBLE = 'NUMBER_DOUBLE'
export const DATATYPE_BOOLEAN = 'BOOLEAN'
export const DATATYPE_BOOLEAN_GROUP = 'BOOLEAN_GROUP'
export const DATATYPE_DATE = 'DATE'
export const DATATYPE_TIME = 'TIME'
export const DATATYPE_DATETIME = 'DATETIME'
export const DATATYPE_JSON = 'JSON'

// TODO - these should be abstracted into @codotype/util
export const DATATYPES = [
  { value: DATATYPE_TEXT, text: 'TEXT', icon: 'fa fa-quote-left' },
  { value: DATATYPE_NUMBER, text: 'Number', icon: 'fa fa-hashtag' },
  { value: DATATYPE_NUMBER_INTEGER, text: 'Integer', icon: 'fa fa-hashtag' },
  { value: DATATYPE_NUMBER_FLOAT, text: 'Float', icon: 'fa fa-hashtag' },
  { value: DATATYPE_NUMBER_DOUBLE, text: 'Double', icon: 'fa fa-hashtag' },
  // { value: DATATYPE_NUMBER_ARRAY, text: 'Number Array', icon: 'fa fa-hashtag' },
  { value: DATATYPE_STRING, text: 'String', icon: 'fa fa-quote-left' },
  { value: DATATYPE_STRING_ARRAY, text: 'String Array', icon: 'fa fa-quote-left' },
  { value: DATATYPE_BOOLEAN, text: 'Boolean', icon: 'far fa-check-square' },
  { value: DATATYPE_DATE, text: 'Date', icon: 'far fa-calendar' },
  { value: DATATYPE_TIME, text: 'Time', icon: 'far fa-clock' },
  { value: DATATYPE_DATETIME, text: 'DateTime', icon: 'far fa-calendar-alt' },
  { value: DATATYPE_JSON, text: 'JSON', icon: 'fa fa-code' }
  // { value: 'GEO', text: 'Geolocation', icon: 'fa-map' },
]
