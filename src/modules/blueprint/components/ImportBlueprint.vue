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
    <div class="form-group">
      <label class='mb-0'>
        Import
      </label>
      <small class="form-text text-muted mb-2">Import a Codotype blueprint JSON file</small>
      <input
        type="file"
        @change="processFile($event)"
      >
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ImportBlueprint',
  data () {
    return {
      blueprintJson: {},
      okDisabled: true
    }
  },
  methods: {
    processFile (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.blueprintJson = JSON.parse(e.target.result)
        this.blueprintJson._id = null
        this.okDisabled = false
      }
      reader.readAsText(file)
    }
  }
}
</script>
