<template>
  <div class="row">
    <div class="col-lg-9">
      <label>{{model.label}}</label>
      <br>
      <small>{{model.help}}</small>
      <MoreInfoLink :url="model.more_info_url" />
    </div>
    <div class="col-lg-3">
      <input type="checkbox" :checked="model.default_value" v-if="model.type === 'BOOLEAN'">
      <input class='form-control' type="text" :value="model.default_value" v-if="model.type === 'TEXT'">
      <select class='form-control' type="text" :value="model.default_value" v-if="model.type === 'TEXT_SELECT'">
        <option :value="opt.value" v-for="opt in model.options" :key="opt.id">{{opt.label}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  name: 'OptionFormitem',
  props: ['model'], // TODO - this should be wired up to emit input events
  components: {
    MoreInfoLink
  }
}
</script>
