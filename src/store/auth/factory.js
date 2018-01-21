import { REGISTER_ROUTE, AUTHENTICATE_ROUTE, SESSION_ROUTE } from './constants'

export default {
  // register
  register (attributes) {
    return new Promise((resolve, reject) => {
      return fetch(REGISTER_ROUTE, {
        method: 'post',
        body: JSON.stringify(attributes),
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      .then((response) => { return response.json() })
      .then((json) => { return resolve(json) })
      .catch((err) => { return reject(err) })
    })
  },

  // authenticate
  authenticate (attributes) {
    return new Promise((resolve, reject) => {
      return fetch(AUTHENTICATE_ROUTE, {
        method: 'post',
        body: JSON.stringify(attributes),
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      .then((response) => { return response.json() })
      .then((json) => { return resolve(json) })
      .catch((err) => { return reject(err) })
    })
  },

  // getSession
  getSession (token) {
    return new Promise((resolve, reject) => {
      return fetch(SESSION_ROUTE, {
        headers: new Headers({ 'Authorization': 'JWT ' + token })
      })
      .then((response) => { return response.json() })
      .then((json) => { return resolve(json) })
      .catch((err) => { return reject(err) })
    })
  }
}
