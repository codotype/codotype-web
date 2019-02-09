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
        <b-nav-item to="/generators">Generators</b-nav-item>

        <b-nav-item to="/blueprints">Blueprints</b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="mr-0">

        <b-nav-form v-if="$route.name === 'BlueprintList'">

          <ImportBlueprint/>

          <b-dropdown
            right
            no-caret
            variant="light"
            class='mr-2'
            toggle-class='rounded'
            size="lg"
          >
            <template slot="button-content">
              <i class="fa fa-fw fa-ellipsis-h"></i>
            </template>
            <b-dropdown-item-button v-b-modal="'import-blueprint'">
              <i class="fa fa-fw fa-upload"></i>
              Import Blueprint JSON
            </b-dropdown-item-button>
          </b-dropdown>

          <TourButton tour='appListSteps' size="lg"/>
        </b-nav-form>

      </b-navbar-nav>

    </b-collapse>

  </b-navbar>

</template>

<script>
import TourButton from '@codotype/ui/src/components/TourButton'
import ImportBlueprint from '@/modules/blueprint/components/ImportBlueprint'

export default {
  name: 'HomeMenu',
  components: {
    TourButton,
    ImportBlueprint
  }
}
</script>
