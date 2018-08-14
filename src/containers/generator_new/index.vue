<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">

        <b-tabs>

          <b-tab title="Overview" active>
            <br>
            <GeneratorMetaEditor />
          </b-tab>

          <b-tab title="Global Options">
            <br>
            <GlobalOptionsEditor />
          </b-tab>

          <b-tab title="Model Options" >
            <br>
            <ModelOptionsEditor />
          </b-tab>

          <b-tab title="Addons" active>
            <br>
            <AddonEditor/>
          </b-tab>

        </b-tabs>

        <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
        <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
        <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>

        <v-tour name="myTour" :steps="steps"></v-tour>

      </div>
    </div>
  </div>
</template>

<script>
import AddonEditor from './components/AddonEditor'
import GeneratorMetaEditor from './components/GeneratorMetaEditor'
import ModelOptionsEditor from './components/ModelOptionsEditor'
import GlobalOptionsEditor from './components/GlobalOptionsEditor'

export default {
  name: 'GeneratorForm',
  components: {
    AddonEditor,
    GeneratorMetaEditor,
    ModelOptionsEditor,
    GlobalOptionsEditor
  },
  // TODO - remove tour data from this component
  data () {
    return {
      steps: [
        {
          target: '#v-step-0',  // We're using document.querySelector() under the hood
          content: `Discover <strong>Vue Tour</strong>!`
        },
        {
          target: '.v-step-1',
          content: 'An awesome plugin made with Vue.js!'
        },
        {
          target: '[data-v-step="2"]',
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
          params: {
            placement: 'top'
          }
        }
      ]
    }
  },
  mounted () {
    this.$tours['myTour'].start()
  }
}
</script>
