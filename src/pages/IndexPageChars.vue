<template>
  <q-page class="flex flex-center">
    <box-component-chars v-for="(char, charindex) in chars" :key="'charindex'+charindex" :name="char.name"
                         :more="char.more"
                         :health="char.health" :aclass="char.aclass"></box-component-chars>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentChars from 'components/boxComponentChars.vue'
import savesComponent from "components/savesComponent.vue";


export default defineComponent({
  name: 'IndexPageChars',
  components: {
    boxComponentChars,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      chars: {
        'str': {
          'name': "Zasalampoustis",
          'more': 'READMORE',
          'health': 16,
          'aclass': 14,
        },
      },
    };
  },

})
</script>
