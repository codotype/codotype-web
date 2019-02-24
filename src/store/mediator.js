import Driver from 'driver.js'

// TODO - clean up this cruft, likely not needed
export default function configureModerator (store, router) {
  // listen to mutations
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case 'build/steps/current':
        let DEV = true // just so I don't go insane
        // TODO - replace hardcoded `blueprint_step` id string
        let selectedStep = store.getters['build/steps/selectedStep']
        if (selectedStep && selectedStep.id === 'blueprint_step' && !DEV) {
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
  // store.subscribeAction(({ type, payload }, state) => {
  //   switch (type) {
  //     case 'build/addNewStage':
  //       store.dispatch('generator/clearSelected')
  //       break
  //   }
  // })
}
