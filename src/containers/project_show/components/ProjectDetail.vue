
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Project Details" />
    </div>

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
</template>

<!-- // // // //  -->

<script>
import TabHeader from '@/components/TabHeader'

export default {
  props: ['model'],
  components: {
    TabHeader
  }
}
</script>


