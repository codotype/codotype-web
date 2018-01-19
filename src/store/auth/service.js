import Vue from 'vue'
// import Config from '../config'

class Auth {
  getToken () {
    this.token = localStorage.token
  }

  deleteToken () {
    delete localStorage.token
  }

  check () {
    if (!this.getToken()) {
      return false
    }

    this.setup()

    return true
  }

  setToken (token) {
    localStorage.token = token
  }

  login (credentials, callback) {
    if (this.getToken()) {
      return true
    }

    // Vue.http.post(Config.api.auth_url, credentials)
    Promise.resolve({ data: { token: 'FOO' } })
      .then((response) => {
        this.setToken(response.data.token)

        if (callback) {
          // callback(true)
          // return
        }
      }, (response) => {
        console.error(response)
        if (callback) {
          // callback(false)
          // return
        }
      })
  }

  logout () {
    this.deleteToken()
  }

  setupRouter () {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + this.getToken()
    this.setupInterceptor()
  }

  setupInterceptor () {
    Vue.http.interceptors.push((request, next) => {
      next((response) => {
        if (response.status === 401) {
          console.log('token invalid', response)
        }
      })
    })
  }
}

const auth = new Auth()

export default auth
