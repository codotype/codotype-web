<template>
  <div class="row">
    <div class="col-lg-12">
      <p class="lead mb-0">Addons</p>
      <small class="text-muted">Addons expose an additional layer of configuration for individual generators.</small>
      <MoreInfoLink url="https://github.com/codotype"/>
      <hr>
    </div>


    <div class="col-lg-3">

      <AddonList :collection="addonCollection" />

      <br>

      <!-- New Addon Form -->
      <button class="btn btn-primary w-100" v-b-modal="'new-addon'">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Addon
      </button>

      <b-modal id="new-addon" :title="'New Addon'" @ok="createAddon()" ok-title='Create' cancel-title='Cancel' >
        <AddonForm :model="newAddon" />
      </b-modal>

    </div>

      <!-- <FormInput label="Label" :required="true" placeholder="Label" v-model="model.label" example="Example: 'Last Name'" help="The human-readable name for this attribute." /> -->

      <!-- <FormInput label="Label Plural" :required="true" placeholder="Label Plural" v-model="model.label_plural" example="Example: 'Last Name'" help="The human-readable name for this attribute." /> -->

      <!-- <FormInput label="Description" :required="true" placeholder="Description" v-model="model.description" example="Example: 'Last Name'" help="The human-readable name for this attribute." /> -->

      <!-- <FormInput label="More Info URL" :required="true" placeholder="More Info URL" v-model="model.more_info_url" example="Example: 'Last Name'" help="The human-readable name for this attribute." /> -->

    <div class="col-lg-9">
      <AddonDetail :model="selectedAddon" />
    </div>

  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import MoreInfoLink from '@/components/MoreInfoLink'
import AddonForm from './AddonForm'
import AddonList from './AddonList'
import AddonDetail from './AddonDetail'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddonEditor',
  components: {
    FormInput,
    MoreInfoLink,
    AddonForm,
    AddonList,
    AddonDetail
  },
  computed: mapGetters({
    newAddon: 'addon/newModel',
    addonCollection: 'addon/collection',
    selectedAddon: 'addon/selectedModel'
  }),
  methods: mapActions({
    createAddon: 'addon/create'
  })
}
</script>
