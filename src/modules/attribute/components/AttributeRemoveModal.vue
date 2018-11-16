<template>
  <b-modal
    ref='removeAttributeModal'
    :title="'Remove Attribute'"
    @ok="removeAttribute()"
    ok-variant='danger'
    ok-title='DESTROY'
    cancel-title='Cancel'
  >
    <!-- <p class="text-left">Are you sure you want to destroy the {{ item.label }} attribute?</p> -->
    <p class="text-left">Are you sure you want to destroy the this attribute?</p>
  </b-modal>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.$store.subscribeAction(({ type, payload }, state) => {
      switch (type) {
        case 'attribute/confirmRemoval': this.showModal()
      }
    })
  },
  methods: {
    ...mapActions({
      removeAttribute: 'attribute/destroy'
    }),
    showModal () {
      if (this.$refs.removeAttributeModal) {
        this.$refs.removeAttributeModal.show()
      }
    }
  }
}
</script>
