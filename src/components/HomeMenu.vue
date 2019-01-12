<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item to="/blueprints">Blueprints</b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="mr-0">

        <b-nav-form v-if="$route.name === 'BlueprintList'">

          <ImportBlueprint/>

          <b-button size="lg" variant="outline-primary" class="mr-4" v-b-modal="'import-blueprint'">
            <i class="fa fa-upload fa-fw"></i>
            Import
          </b-button>

          <HelpButton tour='appListSteps' size="lg"/>
        </b-nav-form>

      </b-navbar-nav>

    </b-collapse>

  </b-navbar>

</template>

<script>
import HelpButton from '@codotype/ui/src/components/HelpButton'
import ImportBlueprint from '@/modules/blueprint/components/ImportBlueprint'

export default {
  name: 'HomeMenu',
  components: {
    HelpButton,
    ImportBlueprint
  }
}
</script>
