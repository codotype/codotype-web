import uniq from 'lodash/uniq'
import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@codotype/ui/src/store/lib/mixins'

// Generator Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  // collection: state => {
  //   return GENERATORS
  // },
  fetching: state => {
    return state.fetching
  },
  techTags: state => {
    return uniq(state.collection.reduce((techTags, g) => { return techTags.concat(g.tech_tags) }, [])).map((t) => { return { selected: false, label: t } })
  },
  typeTags: state => {
    return uniq(state.collection.reduce((typeTags, g) => { return typeTags.concat(g.type_tags) }, [])).map((t) => { return { selected: false, label: t } })
  }
}
