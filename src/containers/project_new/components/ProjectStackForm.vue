
<template>
  <div class="row">
    <div class="col-lg-12">
      <p class="lead">Stack</p>
    </div>
    <div class="col-lg-12">

      <ProjectStackCard title="CSS Frameworks" type="radio" :options="css_frameworks" v-model="model.stack.client.css" />
      <ProjectStackCard title="Build Tool" type="radio" :options="build_tools" v-model="model.stack.client.build_tool" />

      <hr>

      <ProjectStackCard title="Server Frameworks" type="radio" :options="server_frameworks" v-model="model.stack.server.id" />
      <ProjectStackCard title="Authentication" type="checkbox" :options="auth_methods" v-model="model.stack.authentications" />
      <ProjectStackCard title="Databases" type="checkbox" :options="databases" v-model="model.stack.databases" />
      <ProjectStackCard title="Databases" type="checkbox" :options="deployments" v-model="model.stack.deployments" />

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectStackCard from './ProjectStackCard'

export default {
  props: ['model'],
  components: {
    ProjectStackCard
  },
  data () {
    return {
      server_frameworks: [
        { id: 'expressjs', icon: 'express-original', label: 'Express.JS' },
        { id: 'flask', icon: 'python-plain', label: 'Python Flask', disabled: true }
      ],
      build_tools: [
        { id: 'webpack', icon: 'webpack-plain', label: 'Webpack' },
        { id: 'gulp', icon: 'gulp-plain', label: 'Gulp + Browserify', disabled: true }
      ],
      css_frameworks: [
        { id: 'bootstrap', icon: 'bootstrap-plain', label: 'Bootstrap' },
        { id: 'foundation', icon: 'foundation-plain', label: 'Foundation', disabled: true }
      ],
      databases: [
        { id: 'mongo', icon: 'mongodb-plain', label: 'MongoDB' },
        { id: 'postgres', icon: 'postgresql-plain', label: 'PostgreSQL', disabled: true }
        // { id: 'sqlite', icon: 'mysql-plain', label: 'SQLite', disabled: true }
      ],
      auth_methods: [
        { id: 'email', icon: 'amazonwebservices-plain', label: 'E-Mail' },
        { id: 'google', icon: 'google-plain', label: 'Google', disabled: true },
        { id: 'facebook', icon: 'facebook-plain', label: 'Facebook', disabled: true },
        { id: 'github', icon: 'github-plain', label: 'GitHub', disabled: true }
      ],
      deployments: [
        { id: 'docker_compose', icon: 'docker-plain', label: 'Docker + Docker-Compose' },
        // { id: 'ansible', icon: 'amazonwebservices-plain', label: 'Ansible', disabled: true },
        // { id: 'digital_ocean', icon: 'amazonwebservices-plain', label: 'DigitalOcean', disabled: true },
        { id: 'heroku', icon: 'heroku-plain', label: 'Heroku', disabled: true },
        { id: 'azure', icon: 'windows8-plain', label: 'Microsoft Azure', disabled: true },
        { id: 'aws', icon: 'amazonwebservices-plain', label: 'AWS', disabled: true }
      ]
    }
  }
}
</script>


