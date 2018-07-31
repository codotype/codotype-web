// Generator module constants

export const GENERATE_ROUTE = '/api/generate'

export const SERVER_OPTS = [
  // { id: 'none', icon: 'fa fa-times', label: 'None' },
  { id: 'expressjs', icon: 'devicon-express-original', label: 'Express.JS', selected: true },
  { id: 'flask', icon: 'devicon-python-plain', label: 'Flask', disabled: true }
  // { id: 'rails', icon: 'devicon-rails-plain', label: 'Ruby on Rails', disabled: true },
  // { id: 'revel', icon: 'devicon-go-plain', label: 'Revel', disabled: true },
  // { id: 'phoenix', icon: 'devicon-erlang-plain', label: 'Phoenix', disabled: true }
]

export const CLIENT_OPTS = [
  // { id: 'none', icon: 'fa fa-times', label: 'None' },
  // { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
  { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true, text: 'VueJS is a client-side javascript framework for building reactive user interfaces.', href: 'https://github.com/vuejs' },
  { id: 'react', icon: 'devicon-react-plain', label: 'React', disabled: true }
]
