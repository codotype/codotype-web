import { NEW_MODEL_MUTATIONS } from '@codotype/ui/src/store/lib/mixins'

// // // //

export default {
  ...NEW_MODEL_MUTATIONS,
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  buildFinished (state, finished) {
    state.buildFinished = finished
  },
  downloadUrl (state, url) {
    state.downloadUrl = url
  },
  choosingGenerator (state, choosing) {
    state.choosingGenerator = choosing
  }
}
