<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="m in collection" @click="selectAddon(m._id)">
      {{ m.label }}
    </li>
    <li class="list-group-item list-group-item-warning" v-if="!collection[0]">
      No addons defined
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddonList',
  props: ['collection'],
  methods: mapActions({
    selectAddon: 'addon/selectModel'
  })
}
</script>
