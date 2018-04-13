// Generator module constants

export const GENERATE_ROUTE = '/api/generate'

export const SERVER_OPTS = [
  { id: 'none', icon: 'fa fa-times', label: 'None' },
  { id: 'expressjs', icon: 'devicon-express-original', label: 'Express.JS', selected: true },
  { id: 'flask', icon: 'devicon-python-plain', label: 'Flask', disabled: true },
  { id: 'rails', icon: 'devicon-rails-plain', label: 'Ruby on Rails', disabled: true },
  { id: 'revel', icon: 'devicon-go-plain', label: 'Revel', disabled: true },
  { id: 'phoenix', icon: 'devicon-erlang-plain', label: 'Phoenix', disabled: true }
]

export const DATABASE_OPTS = [
  { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
  { id: 'mongo', icon: 'devicon-mongodb-plain', label: 'MongoDB', selected: true },
  { id: 'postgres', icon: 'devicon-postgresql-plain', label: 'PostgreSQL', disabled: true },
  { id: 'sqlite', icon: 'devicon-mysql-plain', label: 'SQLite', disabled: true }
]

export const DEPLOYMENT_OPTS = [
  { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
  { id: 'docker_compose', icon: 'devicon-docker-plain', label: 'Docker', selected: true },
  // { id: 'ansible', icon: 'devicon-amazonwebservices-plain', label: 'Ansible', disabled: true },
  // { id: 'digital_ocean', icon: 'devicon-amazonwebservices-plain', label: 'DigitalOcean', disabled: true },
  { id: 'heroku', icon: 'devicon-heroku-plain', label: 'Heroku', disabled: true },
  { id: 'azure', icon: 'devicon-windows8-plain', label: 'Microsoft Azure', disabled: true },
  { id: 'aws', icon: 'devicon-amazonwebservices-plain', label: 'AWS', disabled: true }
]

export const CLIENT_OPTS = {
  client_frameworks: [
    // { id: 'none', icon: 'fa fa-times', label: 'None' },
    { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
    { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true, text: 'VueJS is a client-side javascript framework for building reactive user interfaces.', href: 'https://github.com/vuejs' },
    { id: 'react', icon: 'devicon-react-plain', label: 'React', disabled: true }
  ],
  build_tools: [
    { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
    { id: 'webpack', icon: 'devicon-webpack-plain', label: 'Webpack', selected: true },
    { id: 'gulp', icon: 'devicon-gulp-plain', label: 'Gulp + Browserify', disabled: true }
  ],
  css_frameworks: [
    { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
    { id: 'bootstrap', icon: 'devicon-bootstrap-plain', label: 'Bootstrap', selected: true },
    { id: 'foundation', icon: 'devicon-foundation-plain', label: 'Foundation', disabled: true }
  ]
}

export const AUTH_OPTS = [
  { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
  { id: 'email', icon: 'fa fa-envelope-o', label: 'E-Mail', selected: true },
  { id: 'google', icon: 'devicon-google-plain', label: 'Google', disabled: true },
  { id: 'facebook', icon: 'devicon-facebook-plain', label: 'Facebook', disabled: true },
  { id: 'github', icon: 'devicon-github-plain', label: 'GitHub', disabled: true }
]
