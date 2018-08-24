import _ from 'lodash'
import ObjectID from 'bson-objectid'
import router from '@/routers'
import { DEFAULT_PROJECT, DEFAULT_USER_SCHEMA, CREATE_SUCCESS_NOTIFICATION } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'

export default {
  ...SELECT_MODEL_ACTIONS
}
