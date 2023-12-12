<template>
  <q-page class="flex flex-center">
    <box-component v-if="false"></box-component>
    <savesComponent></savesComponent>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import boxComponent from 'components/boxComponent.vue'
import savesComponent from "components/savesComponent.vue";
export default defineComponent({
  name: 'IndexPage',
  components: {
    boxComponent,
    savesComponent
  },
})
</script>
