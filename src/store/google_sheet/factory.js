import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const GoogleSheetFactory = new AbstractFactory({
  API_ROOT: '/api/google_sheet',
  REDIRECT_SUCCESS: '#/google_sheet',
  messages: {
    CREATE_SUCCESS: 'Created Google Sheet.',
    UPDATE_SUCCESS: 'Updated Google Sheet.',
    DESTROY_SUCCESS: 'Destroyed Google Sheet.'
  }
})

// // // //

export default GoogleSheetFactory
