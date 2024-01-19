<template>
  <q-page class="flex flex-center" style="margin-top: 4rem;
    display: flex;
    row-gap: 3rem;
    flex-wrap: wrap;
    align-content: flex-start;">
    <box-component-savings v-for="(savings ,savingindex) in savings" :key="'savingindex'+savingindex"
                           :saving-name="savings.name" :saving-skill="savings.skill"
                           :saving-prof="savings.prof" :saving-score="savings.score"
                           :saving-prof-train="savings.proftrain"
                           :saving-prof-color="savings.profcolor"
                           :skilln="savings.skilln"
                           :saving-die-color="savings.diecolor"></box-component-savings>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import savesComponent from "components/savesComponent.vue";
import boxComponentSavings from "components/boxComponentSavings.vue";
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";

const stat = Statstore();
const util = utilitiesStore();
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
        fort: {
          name: 'FORTITUDE',
          skilln: 'CON',
          skill: 0,
          prof: 0,
          score: 0,
          proftrain: 'UNTRAINED',
          profcolor: 0,
          diecolor: 0
        },
        refl: {
          name: 'REFLEX',
          skilln: 'DEX',
          skill: 0,
          prof: 0,
          score: 0,
          proftrain: 'TRAINED',
          profcolor: 0,
          diecolor: 0,
        },

        will: {
          name: 'WILL',
          skilln: 'WIS',
          skill: 0,
          prof: 0,
          score: 0,
          proftrain: 'MASTER',
          profcolor: 0,
          diecolor: 0,
        },
      },
      stat: stat,
      util: util,
    };
  },
  watch: {
  'util.playerselected': {
      handler() {
        this.savings.fort.skill = this.stat.tokens.pcs[this.util.playerselected].stats.con[1];
      this.savings.refl.skill = this.stat.tokens.pcs[this.util.playerselected].stats.dex[1];
      this.savings.will.skill = this.stat.tokens.pcs[this.util.playerselected].stats.wis[1];

      this.savings.fort.score = this.stat.tokens.pcs[this.util.playerselected].defense.fort;
      this.savings.refl.score = this.stat.tokens.pcs[this.util.playerselected].defense.refl;
      this.savings.will.score = this.stat.tokens.pcs[this.util.playerselected].defense.will;
    },
    deep: true
  },
},
  mounted() {
    if (this.util.playerselected) {
      this.savings.fort.skill = this.stat.tokens.pcs[this.util.playerselected].stats.con[1];
      this.savings.refl.skill = this.stat.tokens.pcs[this.util.playerselected].stats.dex[1];
      this.savings.will.skill = this.stat.tokens.pcs[this.util.playerselected].stats.wis[1];

      this.savings.fort.score = this.stat.tokens.pcs[this.util.playerselected].defense.fort;
      this.savings.refl.score = this.stat.tokens.pcs[this.util.playerselected].defense.refl;
      this.savings.will.score = this.stat.tokens.pcs[this.util.playerselected].defense.will;
    } else {
      this.savings.fort.skill = 0;
      this.savings.refl.skill = 0;
      this.savings.will.skill =0;

      this.savings.fort.score =0;
      this.savings.refl.score = 0;
      this.savings.will.score = 0;
    }

    this.savings.fort.prof = 0;

    this.savings.fort.profcolor = this.util.colors.untr;
    this.savings.fort.diecolor = this.util.colors.con;

    this.savings.refl.prof = 2;
    this.savings.refl.profcolor = this.util.colors.trai;
    this.savings.refl.diecolor = this.util.colors.dex;

    this.savings.will.prof = 6;
    this.savings.will.profcolor = this.util.colors.mast;
    this.savings.will.diecolor = this.util.colors.wis;
  }
})
</script>
