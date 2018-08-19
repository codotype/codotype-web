<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="m in collection" @click="selectAddon(m._id)">
      {{ m.label }}
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
