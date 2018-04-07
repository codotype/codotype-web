// TODO - DEFAULT_USER_SCHEMA should be defined here...
import { DEFAULT_USER_SCHEMA } from '@/store/schema/constants'

// TODO - abstract into ./constants
export const DEFAULT_PROJECT = {
  label: 'DEFAULT_LABEL',
  identifier: '',
  user: DEFAULT_USER_SCHEMA,
  schemas: [
  ],
  stack: {
    server: {
      id: 'expressjs'
    },
    client: {
      id: 'vuejs'
    },
    database: {
      id: 'mongodb'
    },
    features: [],
    deployments: []
  }
}
