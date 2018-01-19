import store from '@/store'

// AbstractFactory class definition
class AbstractFactory {
  // constructor
  constructor (options) {
    this.options = options
    this.messages = options.messages // TODO - support default messages
    this.API_ROOT = options.API_ROOT
    return this
  }

  // fetchCollection
  fetchCollection ({ commit }) {
    // State.fetching = true
    commit('fetching', true)

    // Fetches Collection from the server
    fetch(this.API_ROOT)
    // Parses response into JSON
    .then((response) => { return response.json() })
    .then((json) => {
      // State.fetching = false
      commit('fetching', false)

      // Sets state.collection
      commit('sync', json.items)
    }) // TODO - CATCH statement
  }

  // fetchModel
  fetchModel ({ commit }, id) {
    // State.fetching = true
    commit('fetching', true)

    // Fetches Collection from the server
    fetch(this.API_ROOT + '/' + id)
    // Parses response into JSON
    .then((response) => { return response.json() })
    .then((json) => {
      // State.fetching = false
      commit('fetching', false)

      // Sets state.current
      // TODO - rethink this approach..
      commit('current', json)
    }) // TODO - CATCH statement
  }

  // create
  create ({ commit }, attributes) {
    // POST /API_ROOT
    fetch(this.API_ROOT, {
      method: 'post',
      body: JSON.stringify(attributes),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    // Parses response into JSON
    .then((response) => { return response.json() })
    .then((json) => {
      // TODO - ADD ITEM TO COLLECTION

      // Shows CREATE_SUCCESS message
      store.commit('notification/add', { message: this.messages.CREATE_SUCCESS, context: 'info', dismissible: true })

      // Redirects to REDIRECT_SUCCESS
      // TODO - What is the best way to manage redirection in VueJS?
      window.location = this.options.REDIRECT_SUCCESS
    }) // TODO - CATCH statement
  }

  // update
  update ({ commit }, attributes) {
    return fetch(this.API_ROOT + '/' + attributes._id, {
      method: 'put',
      body: JSON.stringify(attributes),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then((response) => {
      // Shows UPDATE_SUCCESS message
      store.commit('notification/add', { message: this.messages.UPDATE_SUCCESS, context: 'success', dismissible: true })

      // Redirects to REDIRECT_SUCCESS
      // TODO - What is the best way to manage redirection in VueJS?
      window.location = this.options.REDIRECT_SUCCESS
    }) // TODO - CATCH STATEMENT
  }

  // destroy
  destroy ({ commit }, id) {
    return fetch(this.API_ROOT + '/' + id, {
      method: 'delete'
    })
    .then((response) => {
      // TODO - REMOVE ITEM FROM COLLECTION

      // Shows DESTROY_SUCCESS message
      store.commit('notification/add', { message: this.messages.DESTROY_SUCCESS, context: 'success', dismissible: true })

      // Redirects to REDIRECT_SUCCESS
      // TODO - What is the best way to manage redirection in VueJS?
      window.location = this.options.REDIRECT_SUCCESS
    }) // TODO - CATCH STATEMENT
  }
}
// // // //

export default AbstractFactory
