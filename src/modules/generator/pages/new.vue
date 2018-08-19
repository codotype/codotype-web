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

      </div>
    </div>
  </div>
</template>

<script>
import AddonEditor from '@/components/AddonEditor'
import GeneratorMetaEditor from '@/components/GeneratorMetaEditor'
import ModelOptionsEditor from '@/components/ModelOptionsEditor'
import GlobalOptionsEditor from '@/components/GlobalOptionsEditor'

export default {
  name: 'GeneratorForm',
  components: {
    AddonEditor,
    GeneratorMetaEditor,
    ModelOptionsEditor,
    GlobalOptionsEditor
  }
}
</script>
