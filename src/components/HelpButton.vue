<template>
  <!-- <a class='mr-3' role="button" @click.stop="startTour()"> -->
    <!-- <i class="fa fa-fw fa-lg fa-question-circle" v-b-tooltip.hover.left :title='"Tutorial"'></i> -->
  <!-- </a> -->
  <b-button variant='outline-dark' :size="size" @click.stop="startTour()" v-b-tooltip.hover.left :title='"Click here to start tour"'>
    <i class="fa fa-question-circle"></i>
    Tutorial
  </b-button>
</template>

<script>
import Driver from 'driver.js'

export default {
  name: 'HelpButton',
  props: ['tour', 'size'],
  created () {
    this.driver = new Driver()
  },
  methods: {
    startTour () {
      this.driver.defineSteps(this.tour)
      return this.driver.start()
    }
  }
}
</script>
