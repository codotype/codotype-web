import Factory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchSheet: ({ commit }, { spreadsheetId }) => {
    window.gapi.client.sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId // '17SHgu0kODoZS-zQY3YvtKIU5gYo4xtCJYUY7g3QAdyE'
    }).then((response) => {
      console.log('FETCHED SHEET')
      console.log(response)
      if (response.result) {
        commit('currentSheet', response.result)
      }
    }, function (response) {
      console.error('Unable to fetch sheet list')
    })
  },

  create: ({ commit }, attributes) => Factory.create({ commit }, attributes),

  update: ({ commit }, attributes) => Factory.update({ commit }, attributes),

  loadSheetAPI: ({ commit }) => {
    console.info('Loading sheet api...')
    window.gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4') // TODO - constantize URI
      .then((resp) => {
        console.log('LOADED CLIENT')
        console.log(resp)
        commit('api_loaded', true)
        // console.error('Unable to load sheet api')
      })
  },

  fetchSheetValues: ({ commit }, { spreadsheetId, page, range }) => {
    // page = 'HOTSHEETS_01'
    window.gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: page + range // '!A2:C' // TODO - parameterize the range selection here
    }).then((resp) => {
      console.log(resp)
    })
  }
}

// // // //

export default actions
