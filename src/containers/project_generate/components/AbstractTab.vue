
<template>
  <div class="row">
    <div class="col-lg-12 text-center pb-4">
      <TabHeader :title="title" />
      <div class="row">
        <div class="col-lg-12 d-flex flex-row justify-content-center">
          <StackChild v-for="opt in stackOpts" :key="opt.id" :opt="opt" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import TabHeader from '@/components/TabHeader'
import StackChild from '@/components/StackChild'

export default {
  props: ['model', 'stackId', 'title', 'stackOpts'],
  components: {
    TabHeader,
    StackChild
  },
  computed: {
    selectedOpt () {
      let selectedOptId = this.model.stack[this.stackId].id
      return _.find(this.stackOpts, { id: selectedOptId })
    }
  }
}
</script>
