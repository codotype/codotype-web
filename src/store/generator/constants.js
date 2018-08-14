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
    description: 'Generate front-end API client applications with React, Redux, Axios, and Bootstrap',

    // // // //

    // Whether or not this generator accepts an application for generator, on relys SOLELY on its own metadata collection
    accept_app: true,

    // Whether or not this generator REQUIRES an application for generation
    requires_app: true,

    // Generator-specific models
    // These are scoped to this generator ONLY and are not transient between different generators
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
      },
      {
        label: 'Navbar Link',
        label_plural: 'Navbar Links',
        identifier: 'navbar_link',
        identifier_plural: 'navbar_links',
        class_name: 'NavbarLink',
        class_name_plural: 'NavbarLinks',
        description: 'Define Navbar Links to be generated for this application',
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
            label: 'Label',
            identifier: 'label',
            datatype: 'TEXT',
            help: 'The title of this page',
            default_value: 'About',
            required: true,
            unique: false
          }
        ]
      }
    ],

    // Encapsulates default values for model metadata conforming to model definitions in `generator_models`
    generator_model_data: {
      static_pages: [
        { url: '/', title: 'Home', content: 'Hello! This is the HOME page' },
        { url: '/about', title: 'About', content: 'Hello! This is the about page' }
      ]
    },

    // global_options
    // These additional options can be collected to dictate some generator-defined global behavior
    // I.e. A single generator may support multiple authentication methods - global options could be used to dictate
    // whether or not an authentication method is available globally
    global_options: [
      {
        label: 'Use Bootstrap 4',
        identifier: 'include_template',
        type: 'BOOLEAN',
        help: 'Whether or not to build the UI using Bootstrap 4.',
        default_value: true,
        more_info_url: 'https://getbootstrap.com'
      }
    ],

    // model_options
    // These additional options can be collected on a model-specific basis
    // They provide an additional layer of metadata for each model in an application
    // NOTE - this relys on a generator accepting a set of app models
    model_options: [
      {
        label: 'FontAwesome Icon',
        identifier: 'fontawesome_icon',
        type: 'TEXT',
        help: 'Specify a FontAwesome icon to be used in the UI for this model.',
        default_value: 'fa-checkbox',
        more_info_url: 'https://fontawesome.com'
      }
      // {
      //   label: 'Generate Archtype',
      //   identifier: 'generate_archtype',
      //   type: 'BOOLEAN',
      //   help: 'Whether or not a Hugo Archtype are generated for this model',
      //   default_value: true,
      //   more_info_url: null
      // }
    ]
  }
]
