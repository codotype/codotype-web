
<template>
  <table class="table table-striped table-hover">

    <!-- Table Header -->
    <thead>

      <th>
        Name
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Application Name" ></i>
      </th>

      <th>
        Google Sheets ID
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="ID of the Google Sheet used to build the application." ></i>
      </th>

      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>
      <tr v-for="m in collection" :key="m._id">

        <td>
          <a :href=" '#/applications/' + m._id ">
            {{m.name}}
          </a>
        </td>

        <td>{{m.google_sheets_id}}</td>

        <!-- Edit Application-->
        <td>
          <a class="btn btn-sm btn-outline-warning" :href=" '#/applications/' + m._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </a>
        </td>
      </tr>
    </tbody>

  </table>

</template>

<!-- // // // //  -->

<script>
export default {
  props: ['collection']
}
</script>


