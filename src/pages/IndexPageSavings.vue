<template>
  <q-page class="flex flex-center">
    <box-component-savings v-for="(savings ,savingindex) in savings" :key="'savingindex'+savingindex"
                           :saving-name="savings.name" :saving-skill="savings.skill"
                           :saving-prof="savings.prof" :saving-score="savings.score"
                           :saving-prof-train="savings.proftrain"
                           :saving-prof-color="savings.profcolor"
                           :saving-die-color="savings.diecolor"></box-component-savings>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import savesComponent from "components/savesComponent.vue";
import boxComponentSavings from "components/boxComponentSavings.vue";


export default defineComponent({
  name: 'IndexPageSavings',
  components: {
    boxComponentSavings,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      savings: {
        'fort': {
          'name': 'FORTITUDE',
          'skill': 1,
          'prof': 2,
          'score': 3,
          'proftrain': 'UNTRAINED',
          'profcolor': '#0C6915',
          'diecolor': '#023669'
        },
        'fart': {
          'name': 'REFLEX',
          'skill': 1,
          'prof': 2,
          'score': 3,
          'proftrain': 'UNTRAINED',
          'profcolor': '#0C6915',
          'diecolor': '#023669'
        },

        'fock': {
          'name': 'WILL',
          'skill': 1,
          'prof': 2,
          'score': 3,
          'proftrain': 'MASTER',
          'profcolor': '#602402',
          'diecolor': '#023669'
        },
      }
    };
  }
  ,
})
</script>
