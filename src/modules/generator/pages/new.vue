<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">

        <b-tabs lazy no-fade>

          <b-tab title="Overview" active>
            <br>
            <GeneratorMetaEditor />
          </b-tab>

          <b-tab title="Global Options">
            <br>
            <OptionEditorLayout />
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
import AddonEditor from '@/modules/addon/components/AddonEditor'
import GeneratorMetaEditor from '@/components/GeneratorMetaEditor'
import ModelOptionsEditor from '@/components/ModelOptionsEditor'
import OptionEditorLayout from '@/modules/option/components/OptionEditorLayout'

export default {
  name: 'GeneratorForm',
  components: {
    AddonEditor,
    GeneratorMetaEditor,
    ModelOptionsEditor,
    OptionEditorLayout
  }
}
</script>
