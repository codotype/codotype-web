<template>
  <b-modal
    lazy
    id="import-blueprint"
    ref="importBlueprint"
    :title="'Import Blueprint'"
    @ok="$store.dispatch('blueprint/import', blueprintJson)"
    ok-title='Import'
    cancel-title='Cancel'
    :ok-disabled="okDisabled"
  >
    <p class="form-text text-muted mb-2">Import a Codotype Blueprint stored in a .JSON file</p>

    <div class="input-group mb-3">
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          accept=".json"
          id="inputGroupFile01"
          @change="processFile($event)">
        <label class="custom-file-label" for="inputGroupFile01">Choose Blueprint</label>
      </div>
    </div>

    <small class="text-success" v-if="uploaded && blueprintValid">
      <i class="fa fa-check-circle"></i>
      Imports the {{blueprintJson.label}} Blueprint with {{blueprintJson.schemas.length}} models
    </small>

    <small class="text-danger" v-if="uploaded && !blueprintValid">
      <i class="fa fa-times-circle"></i>
      Invalid blueprint format
    </small>

  </b-modal>
</template>

<script>
export default {
  name: 'ImportBlueprint',
  data () {
    return {
      blueprintJson: {},
      uploaded: false,
      okDisabled: true,
      blueprintValid: false
    }
  },
  methods: {
    processFile (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      this.okDisabled = true
      reader.onload = (e) => {
        this.uploaded = true
        this.blueprintJson = JSON.parse(e.target.result)
        this.blueprintJson._id = null
        // TODO - validate parsed blueprint in Vuex store
        if (this.blueprintJson.schemas && this.blueprintJson.label) {
          this.okDisabled = false
          this.blueprintValid = true
        }
      }
      reader.readAsText(file)
    }
  }
}
</script>
