// Generator module constants
export const GENERATE_ROUTE = '/api/generate'

// TODO - this should be fetched from the server, ideally
export const GENERATORS = [
  {
    id: 'expressjs',
    icon: 'devicon-express-original',
    label: 'Express.JS',
    additional_options: [],
    description: 'ExpressJS is a server-side javascript framework for building APIs.',
    tech_tags: ['Express.js', 'Node', 'ES6', 'MongoDB'],
    type_tags: ['Backend'],
    self_configuring: false,
    addons: [],
    global_options: [],
    model_options: [],
    github_url: 'codotype/codotype-nodejs-express-mongodb-generator',
    version: '0.1.0',
    official: true
  },
  {
    id: 'flask',
    icon: 'devicon-python-plain',
    label: 'Flask',
    additional_options: [],
    description: 'Flask is a server-side Python framework for building full-stack applications.',
    tech_tags: ['Vue', 'Vue-Router', 'Vuex', 'Axios', 'Bootstrap'],
    type_tags: ['Fullstack'],
    self_configuring: false,
    addons: [],
    global_options: [],
    model_options: [],
    github_url: 'codotype/codotype-flask-postgresql-generator',
    version: '0.1.0',
    official: true
  },
  {
    id: 'vuejs',
    icon: 'devicon-vuejs-plain',
    label: 'Vue.js',
    href: 'https://github.com/vuejs',
    additional_options: [],
    description: 'VueJS is a client-side javascript framework for building reactive user interfaces.',
    tech_tags: ['Vue', 'Vue-Router', 'Vuex', 'Axios', 'Bootstrap'],
    type_tags: ['Frontend'],
    self_configuring: true,
    addons: [],
    global_options: [],
    model_options: [],
    github_url: 'codotype/codotype-vuejs-vuex-bootstrap-generator',
    version: '0.1.0',
    official: true
  },
  {
    id: 'react',
    label: 'React',
    icon: 'devicon-react-plain',
    description: 'Generate front-end API client applications with React, Redux, Axios, and Bootstrap',
    tech_tags: ['React', 'Redux', 'Axios', 'Bootstrap'],
    type_tags: ['Frontend'],
    github_url: 'codotype/codotype-react-generator',
    version: '0.1.0',
    official: false,

    // // // //

    // Whether or not this generator accepts an application for generator, on relys SOLELY on its own metadata collection
    // Basically whether or not this generator REQUIRES an application for generation, or if it can be self_configuring
    self_configuring: false,

    // Generator-specific models
    // These are scoped to this generator ONLY and are not transient between different generators
    // TODO - we might want to rename this if addons becomes something bigger..
    addons: [
      {
        id: 1,
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
        id: 2,
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

    // Encapsulates default values for model metadata conforming to model definitions in `addons`
    // "Seed data" for self-configuring generators - perhaps rename to `default_configuration`?
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
    // NOTE - NOT AVAILABLE when `self_configuring === true`
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
