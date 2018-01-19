import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const ApplicationFactory = new AbstractFactory({
  API_ROOT: '/api/applications',
  REDIRECT_SUCCESS: '#/applications',
  messages: {
    CREATE_SUCCESS: 'Created Application.',
    UPDATE_SUCCESS: 'Updated Application.',
    DESTROY_SUCCESS: 'Destroyed Application.'
  }
})

// // // //

export default ApplicationFactory
