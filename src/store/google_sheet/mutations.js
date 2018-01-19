
// Google Sheet Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  },
  api_loaded (state, is_loaded) {
    state.api_loaded = is_loaded
  },
  currentSheet (state, sheet) {
    state.currentSheet = sheet
  }
}

export default mutations
