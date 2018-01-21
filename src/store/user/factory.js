import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const UserFactory = new AbstractFactory({
  API_ROOT: '/api/users',
  REDIRECT_SUCCESS: '#/users',
  messages: {
    CREATE_SUCCESS: 'Created User.',
    UPDATE_SUCCESS: 'Updated User.',
    DESTROY_SUCCESS: 'Destroyed User.'
  }
})

// // // //

export default UserFactory
