
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
