<template>
  <div class="card card-body">

    <p class='card-text'>
      {{ model.label }}
      <small class="ml-2 text-muted">
        {{ model.identifier }}
      </small>
    </p>

    <p class="text-danger">TODO - wire up FormInput components here</p>
    <pre class="bg-dark text-light">{{ model }}</pre>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  name: 'OptionPreview',
  props: ['model'],
  components: {
    MoreInfoLink
  }
}
</script>
