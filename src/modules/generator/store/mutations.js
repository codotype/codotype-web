import { SELECT_MODEL_MUTATIONS } from '@/store/lib/mixins'

// Generator Module mutations
export default {
  ...SELECT_MODEL_MUTATIONS,
  fetching (state, fetching) {
    state.fetching = fetching
  }
}
