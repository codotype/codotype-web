import { NEW_MODEL_GETTERS } from '@codotype/ui/src/store/lib/mixins'

// Build Module Getters
// TODO - add availableGenerators getter
export default {
  ...NEW_MODEL_GETTERS,
  fetching: state => {
    return state.fetching
  },
  buildFinished: state => {
    return state.buildFinished
  },
  downloadUrl: state => {
    return state.downloadUrl
  },
  showSidebar: state => {
    if (state.choosingGenerator) return false
    return (state.newModel.app_id && state.newModel.stages[0])
  },
  choosingGenerator: state => {
    if (!state.newModel.app_id) return false
    return state.choosingGenerator
  }
}
