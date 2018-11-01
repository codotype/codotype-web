export default function configureModerator (store, router) {
  // listen to mutations
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case 'generator/selectedModel':
        if (payload.id) store.commit('build/choosingGenerator', false)
        break
      case 'build/choosingGenerator':
        if (payload) {
          store.dispatch('generator/clearSelected')
        } else {
          console.log('NEW BUILD MODEL?')
          const newBuildModel = store.getters['build/newModel']
          if (!newBuildModel.stages[0]) {
            console.log('TODO - HANDLE ERROR HERE')
          } else {
            console.log('TODO - SELECT MODEL HERE')
            // store.dispatch('generator/selectModel', newBuildModel.stages[0].generator_id)
          }
        }
        break
    }
  })

  // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type, payload }, state) => {
    switch (type) {
      case 'build/addNewStage':
        store.dispatch('generator/clearSelected')
        break
    }
  })
}
