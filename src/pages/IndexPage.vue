<template>
  <q-page class="flex flex-center">
    <box-component></box-component>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import boxComponent from 'components/boxComponent.vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    boxComponent
  },
})
</script>
