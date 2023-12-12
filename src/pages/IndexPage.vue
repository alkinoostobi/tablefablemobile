<template>
  <q-page class="flex flex-center">
    <box-component v-for="(stat, statindex) in stats" :key="'statindex'+statindex" :stat-modifier="stat.modifier" :stat-name="stat.name" :stat-score="stat.score"></box-component>
    <savesComponent v-if="false"></savesComponent>
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
  data() {
    return {
      show_second : false,
      stats : {
        'str' : {
          'name' : 'STRENGTH',
          'score' : 10,
          'modifier' : 0
        },
        'dex' : {
          'name' : 'DEXTERITY',
          'score' : 10,
          'modifier' : 0
        },
        'con' : {
          'name' : 'CONSTITUTION',
          'score' : 10,
          'modifier' : 0
        },
        'int' : {
          'name' : 'INTELLIGENCE',
          'score' : 10,
          'modifier' : 0
        },
        'wis' : {
          'name' : 'WISDOM',
          'score' : 14,
          'modifier' : 2
        },
        'cha' : {
          'name' : 'CHARISMA',
          'score' : 10,
          'modifier' : 0
        },
      },

    };
  },
})
</script>
