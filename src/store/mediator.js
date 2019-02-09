import Driver from 'driver.js'

// TODO - clean up this cruft, likely not needed
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
      case 'build/steps/current':
        console.log('INCREMENT')
        console.log(payload)
        let DEV = true // just so I don't go insane
        if (payload === 1 && !DEV) {
          setTimeout(() => {
            let driver = new Driver()
            let tourSteps = store.getters['tour/appEditorSteps']
            driver.defineSteps(tourSteps)
            driver.start()
          }, 300)
          break
        }
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
