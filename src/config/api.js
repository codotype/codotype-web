
const API_URL = 'http://api.dev/v1/'

function apiUrl (path) {
  return API_URL + path
}

export default {
  api: {
    auth_url: apiUrl('auth')
  }
}
