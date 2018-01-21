
<template>
  <div class="row">
    <div class="col-lg-12">
      <p class="lead">Stack</p>
    </div>
    <div class="col-lg-12">

      <ProjectStackCard title="Client Frameworks" type="radio" :options="client_frameworks" v-model="model.stack.client.id" />
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
        { id: 'expressjs', label: 'Express.JS' },
        { id: 'flask', label: 'Python Flask', disabled: true }
      ],
      client_frameworks: [
        { id: 'vuejs', label: 'Vue.js' },
        { id: 'react', label: 'React', disabled: true }
      ],
      build_tools: [
        { id: 'webpack', label: 'Webpack' },
        { id: 'gulp', label: 'Gulp + Browserify', disabled: true }
      ],
      css_frameworks: [
        { id: 'bootstrap', label: 'Bootstrap' },
        { id: 'foundation', label: 'Foundation', disabled: true }
      ],
      databases: [
        { id: 'mongo', label: 'MongoDB' },
        { id: 'postgres', label: 'PostgreSQL', disabled: true },
        { id: 'sqlite', label: 'SQLite', disabled: true }
      ],
      auth_methods: [
        { id: 'email', label: 'E-Mail' },
        { id: 'google', label: 'Google', disabled: true },
        { id: 'facebook', label: 'Facebook', disabled: true },
        { id: 'github', label: 'GitHub', disabled: true }
      ],
      deployments: [
        { id: 'docker_compose', label: 'Docker + Docker-Compose' },
        { id: 'ansible', label: 'Ansible', disabled: true },
        { id: 'google', label: 'DigitalOcean', disabled: true },
        { id: 'facebook', label: 'Heroku', disabled: true },
        { id: 'github', label: 'Microsoft Azure', disabled: true }
      ]
    }
  }
}
</script>


