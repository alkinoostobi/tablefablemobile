<template>
  <q-page class="flex flex-center">
    <box-component-skills v-for="(skills ,skillindex) in skills" :key="'skillindex'+skillindex"
                          :skill-name="skills.name"
                          :skill-score="skills.score" :skill-prof="skills.prof"
                          :skill-color="skills.color" :skill-die-color="skills.diecolor"></box-component-skills>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import savesComponent from "components/savesComponent.vue";
import boxComponentSkills from "components/boxComponentSkills.vue";


export default defineComponent({
  name: 'IndexPageSkills',
  components: {
    boxComponentSkills,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      skills: {
        acro: {
          name: 'ACROBATICS',
          score: '+2',
          prof: 'TRAINED',
          color: '#023669',
          diecolor: '#39FFBD'
        },
        arc: {
          name: 'ARCANA',
          score: '+4',
          prof: 'EXPERT',
          color: '#760278',
          diecolor: '#F6C99C'
        },
        athl: {
          name: 'ATHLETICS',
          score: '+0',
          prof: 'UNTRAINED',
          color: '#0C6915',
          diecolor: '#FF5252'
        },
        craf: {
          name: 'CRAFTING',
          score: '+8',
          prof: 'LEGENDARY',
          color: '#68640B',
          diecolor: '#5C5CFF'
        },
        dec: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        dipl: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        inti: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        lore: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        medi: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        natu: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        occu: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        perf: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        reli: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        soci: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        stel: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        surv: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
        thie: {
          name: 'DECEPTION',
          score: '+6',
          prof: 'MASTER',
          color: '#4C2B0D',
          diecolor: '#5C5CFF'
        },
      }
    };
  }
  ,
})
</script>
