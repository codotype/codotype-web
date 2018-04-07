// Generator module constants

export const DEPLOYMENT_OPTS = [
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
    { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true, text: 'VueJS is a client-side javascript framework for building reactive user interfaces.', href: 'https://github.com/vuejs' },
    { id: 'react', icon: 'devicon-react-plain', label: 'React', disabled: true }
  ],
  build_tools: [
    { id: 'webpack', icon: 'devicon-webpack-plain', label: 'Webpack', selected: true },
    { id: 'gulp', icon: 'devicon-gulp-plain', label: 'Gulp + Browserify', disabled: true }
  ],
  css_frameworks: [
    { id: 'bootstrap', icon: 'devicon-bootstrap-plain', label: 'Bootstrap', selected: true },
    { id: 'foundation', icon: 'devicon-foundation-plain', label: 'Foundation', disabled: true }
  ]
}
