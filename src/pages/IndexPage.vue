<template>
  <q-page class="flex flex-center">
    <box-component v-for="(stat, statindex) in stats" :key="'statindex'+statindex" :stat-modifier="stat.modifier"
                   :stat-name="stat.name" :stat-score="stat.score" :stat-color="stat.color"></box-component>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
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
      show_second: false,
      stats: {
        'str': {
          'name': 'Strength',
          'score': 12,
          'modifier': 1,
          'color': '#FF5252'
        },
        'dex': {
          'name': 'DEXTERITY',
          'score': 10,
          'modifier': 0,
          'color': '#39FFBD'
        },
        'con': {
          'name': 'CONSTITUTION',
          'score': 14,
          'modifier': 2,
          'color': '#FC9538'
        },
        'int': {
          'name': 'INTELLIGENCE',
          'score': 8,
          'modifier': 1,
          'color': '#F6C99C'
        },
        'wis': {
          'name': 'WISDOM',
          'score': 16,
          'modifier': 3,
          'color': '#5C5CFF'
        },
        'cha': {
          'name': 'CHARISMA',
          'score': 13,
          'modifier': 1,
          'color': '#C01DFC',
        },
      },
    };
  },

})
</script>
