
<template>
  <div class="row">
    <div class="col-lg-12">
      <TabHeader :title="title" />
      <StackSelector type="radio" :options="stackOpts" v-model="model.stack[stackId].id" />
    </div>
    <!-- <div class="col-lg-12 mt-4"> -->
      <!-- <a class="btn btn-outline-light" :href="selectedOpt.href"> -->
        <!-- Website -->
      <!-- </a> -->
      <!-- <p class="lead">{{selectedOpt.text}}</p> -->
    <!-- </div> -->
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import TabHeader from '@/components/TabHeader'
import StackSelector from '@/components/StackSelector'

export default {
  props: ['model', 'stackId', 'title', 'stackOpts'],
  components: {
    TabHeader,
    StackSelector
  },
  computed: {
    selectedOpt () {
      let selectedOptId = this.model.stack[this.stackId].id
      return _.find(this.stackOpts, { id: selectedOptId })
    }
  }
}
</script>
