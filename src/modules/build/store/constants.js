// Build module constants
export const DEFAULT_BUILD = {
  _id: null,
  app: null,
  stages: []
}

export const DEFAULT_BUILD_STAGE = {
  _id: null,
  enabled: true,
  generator_id: '',
  generator_configuration: {}
}

export const CREATE_SUCCESS_NOTIFICATION = {
  message: ':slow clap:',
  context: 'Successfully built app',
  dismissible: true
}
