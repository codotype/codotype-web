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
    // TODO - add default generator seed_data, like so:
    generator_model_data: {
      pages: [
        { url: '/', title: 'Home', content: 'Hello! This is the HOME page' },
        { url: '/about', title: 'About', content: 'Hello! This is the about page' }
      ]
    },
    generator_models: [
      {
        label: 'Static Page',
        label_plural: 'Static Pages',
        identifier: 'static_page',
        identifier_plural: 'static_pages',
        class_name: 'StaticPage',
        class_name_plural: 'StaticPages',
        description: 'Define static pages to be generated for this application',
        more_info_url: null,
        attributes: [
          {
            label: 'URL',
            identifier: 'url',
            datatype: 'TEXT',
            help: 'The URL of this page (prefix with /)',
            default_value: '/about',
            required: true,
            unique: false
          },
          {
            label: 'Title',
            identifier: 'title',
            datatype: 'TEXT',
            help: 'The title of this page',
            default_value: 'About',
            required: true,
            unique: false
          },
          {
            label: 'Content',
            identifier: 'content',
            datatype: 'TEXT',
            help: 'The content on the page',
            default_value: 'This is an about page',
            required: false,
            unique: false
          }
        ]
      }
    ],
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
