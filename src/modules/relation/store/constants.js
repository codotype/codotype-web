
// Relation constants
export const DEFAULT_RELATION = {
  id: null,
  order: 0,
  type: 'BELONGS_TO', // Moved from datatypeOptions.relationType
  required: false,
  // QUESTION - add schema id here?
  generate_reverse: true,
  related_schema_id: '',
  reverse_relation_id: '',
  as: '',
  reverse_as: ''
}
