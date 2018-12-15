
// Schema constants
export const DEFAULT_SCHEMA = {
  _id: null,
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
export const RELATION_TYPES = [
  { id: 'BELONGS_TO', label: 'Belongs To', description: 'A two-way association to a single model' },
  { id: 'HAS_ONE', label: 'Has One', description: 'A one-way association to a single model' },
  { id: 'HAS_MANY', label: 'Has Many', description: 'A one-way association to many models' }
]

// Datattype IDs
// TODO - these are duplicated in the Option store
// TODO - these should be abstracted into @codotype/util
export const TEXT = 'TEXT'
export const STRING_ARRAY = 'STRING_ARRAY'
export const NUMBER = 'NUMBER'
export const BOOL = 'BOOL'
export const DATE = 'DATE'
export const TIME = 'TIME'
export const DATETIME = 'DATETIME'
export const COLOR = 'COLOR'
// export const RELATION = 'RELATION'

// TODO - these should be abstracted into @codotype/util
export const DATATYPES = [
  { value: TEXT, text: 'String', icon: 'fa fa-quote-left' },
  { value: NUMBER, text: 'Number', icon: 'fa fa-hashtag' },
  // { value: NUMBER_INTEGER, text: 'Integer', icon: 'fa fa-hashtag' },
  // { value: NUMBER_FLOAT, text: 'Float', icon: 'fa fa-hashtag' },
  // { value: NUMBER_DOUBLE, text: 'Double', icon: 'fa fa-hashtag' },
  // { value: 'NUMBER_ARRAY', text: 'Number Array', icon: 'fa fa-hashtag' },
  { value: STRING_ARRAY, text: 'String Array', icon: 'fa fa-quote-left' },
  { value: BOOL, text: 'Boolean', icon: 'far fa-check-square' },
  { value: DATE, text: 'Date', icon: 'far fa-calendar' },
  { value: TIME, text: 'Time', icon: 'far fa-clock' },
  { value: DATETIME, text: 'DateTime', icon: 'far fa-calendar-alt' },
  // { value: COLOR, text: 'Color', icon: 'far fa-eyedropper' },
  { value: 'JSON', text: 'JSON', icon: 'fa fa-code' }
  // { value: 'GEO', text: 'Geolocation', icon: 'fa-map' },
  // { value: RELATION, text: 'Relation', icon: 'fa-link' }
]
