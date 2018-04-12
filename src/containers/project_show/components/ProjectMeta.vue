<template>
  <div class="row">
    <div class="col-lg-12">

      <EditorHeader :help="'Define metadata pertaining to the ' + model.label + ' app.'" />

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <table class="table table-striped">
            <tbody>

              <tr>
                <td>
                  Label
                </td>
                <td>
                  {{model.label}}
                </td>
              </tr>

              <tr>
                <td>
                  Identifier
                </td>
                <td>
                  {{model.identifier}}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


