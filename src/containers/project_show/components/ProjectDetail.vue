
<template>
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
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model']
}
</script>


