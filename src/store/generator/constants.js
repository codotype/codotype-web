// Generator module constants
export const GENERATE_ROUTE = '/api/generate'

export const SERVER_OPTS = [
  // { id: 'none', icon: 'fa fa-times', label: 'None' },
  { id: 'expressjs', icon: 'devicon-express-original', label: 'Express.JS', selected: true, additional_options: [] },
  { id: 'flask', icon: 'devicon-python-plain', label: 'Flask', disabled: true, additional_options: [] }
  // { id: 'rails', icon: 'devicon-rails-plain', label: 'Ruby on Rails', disabled: true },
  // { id: 'revel', icon: 'devicon-go-plain', label: 'Revel', disabled: true },
  // { id: 'phoenix', icon: 'devicon-erlang-plain', label: 'Phoenix', disabled: true }
]

export const CLIENT_OPTS = [
  // { id: 'none', icon: 'fa fa-times', label: 'None' },
  // { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
  { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true, text: 'VueJS is a client-side javascript framework for building reactive user interfaces.', href: 'https://github.com/vuejs', additional_options: [] },
  {
    id: 'react',
    label: 'React',
    icon: 'devicon-react-plain',
    disabled: true,
    global_options: [
      {
        label: 'Include Hugo Template',
        identifier: 'include_template',
        type: 'BOOLEAN',
        help: 'Whether or not to include a hugo template with the generated codebase',
        default_value: true,
        more_info_url: 'https://kotaku.com'
      }
    ],
    model_options: [
      {
        label: 'Generate Templates',
        identifier: 'generate_templates',
        type: 'BOOLEAN',
        help: 'Whether or not HTML templates are generated for this model',
        default_value: true,
        more_info_url: 'https://kotaku.com'
      },
      {
        label: 'Generate Archtype',
        identifier: 'generate_archtype',
        type: 'BOOLEAN',
        help: 'Whether or not a Hugo Archtype are generated for this model',
        default_value: true,
        more_info_url: null
      }
    ]
  }
]
