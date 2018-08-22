<template>
  <div class="row">
    <div class="col-lg-12">
      <p class="lead mb-0">Global Options</p>
      <small class="text-muted">Global Options expose an additional layer of configuration for individual generators.</small>
      <MoreInfoLink url="https://github.com/codotype"/>
      <hr>
    </div>

    <!-- New Option Modal -->
    <b-modal
      id="new-option"
      :title="'New Model'"
      @ok="createNewOption()"
      ok-title='Create'
      cancel-title='Cancel'
    >
      <OptionForm :model="newOptionModel" />
    </b-modal>

    <div class="col-lg-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          Options
          <button class="btn btn-sm btn-outline-primary" v-b-modal="'new-option'">
            <i class="fa fa-plus"></i>
            New Option
          </button>
        </div>
        <OptionList />
      </div>
    </div>

    <div class="col-lg-8">
      <OptionDetail />
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MoreInfoLink from '@/components/MoreInfoLink'
import OptionList from './OptionList'
import OptionForm from './OptionForm'
import OptionDetail from './OptionDetail'

export default {
  components: {
    MoreInfoLink,
    OptionList,
    OptionForm,
    OptionDetail
  },
  created () {
    this.resetNewModel()
  },
  methods: mapActions({
    resetNewModel: 'option/resetNewModel',
    createNewOption: 'option/create'
  }),
  computed: mapGetters({
    newOptionModel: 'option/newModel'
  })
}
</script>
