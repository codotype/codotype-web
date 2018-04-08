
// Schema constants
export const DEFAULT_SCHEMA = {
  _id: null,
  label: '',
  label_plural: '',
  identifier: '',
  identifier_plural: '',
  attributes: [],
  display: {
    icon: 'fa-square-o',
    navbar_link: true
  }
}

export const RELATION_TYPES = [
  { id: 'HAS_ONE', text: 'Has One', desc: 'one X has one Y' },
  { id: 'BELONGS_TO', text: 'Belongs To', desc: 'many X belong to one Y' },
  { id: 'HAS_MANY', text: 'Has Many', desc: 'one X has many Y' }
]

export const DATATYPES = [
  { id: 'TEXT', text: 'Text' },
  { id: 'NUMBER', text: 'Number' },
  { id: 'BOOL', text: 'Checkbox' },
  { id: 'DATE', text: 'Date' },
  { id: 'TIME', text: 'Time' },
  { id: 'COLOR', text: 'Color' },
  { id: 'GEO', text: 'Geolocation' },
  { id: 'RELATION', text: 'Relation' }
]

// <!-- <optgroup label="Basics"> -->
//   <!-- <option value='RANGE'>Range</option> -->
//   <!-- <option value='PASSWORD'>Password</option> -->
//   <!-- <option value='URL'>URL</option> -->
// <!-- </optgroup> -->
// <!-- <optgroup label="Masked"> -->
//   <!-- <option value='PHONE_NUMBER'>Phone Number</option> -->
//   <!-- <option value='EMAIL'>Phone Number</option> -->
//   <!-- <option value='CURRENCY_USD'>Currency (USD)</option> -->
// <!-- </optgroup> -->
// <!-- <optgroup label="Dropdowns"> -->
//   <!-- <option value='TEXT_SELECT'>Text Dropdown</option> -->
//   <!-- <option value='NUMBER_SELECT'>Number Dropdown</option> -->
//   <!-- <option value='TEXT_SELECT_MULTI'>Text Multi Dropdown</option> -->
//   <!-- <option value='NUMBER_SELECT_MULTI'>Number Multi Dropdown</option> -->
// <!-- </optgroup> -->
// <!-- <optgroup label="Relations"> -->
//   <!-- <option value='HAS_ONE'>Has One</option> -->
//   <!-- <option value='BELONGS_TO'>Belongs To</option> -->
//   <!-- <option value='HAS_MANY'>Has Many</option> -->
//   <!-- <option value='HAS_AND_BELONGS_TO_MANY'>Has And Belongs To Many</option> -->
// <!-- </optgroup> -->
