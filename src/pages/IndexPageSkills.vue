<template>
  <q-page class="flex flex-center" style="row-gap: 2rem;margin-top: 4rem">
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
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";

const stat = Statstore();
const util = utilitiesStore();
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
          score: 0,
          prof: 'UNTRAINED',
          color: 0,
          diecolor: 0,
        },
        arc: {
          name: 'ARCANA',
          score: 0,
          prof: 'TRAINED',
          color: 0,
          diecolor: 0,
        },
        athl: {
          name: 'ATHLETICS',
          score: 0,
          prof: 'EXPERT',
          color: 0,
          diecolor: 0,
        },
        craf: {
          name: 'CRAFTING',
          score: 0,
          prof: 'UNTRAINED',
          color: 0,
          diecolor: 0
        },
        dece: {
          name: 'DECEPTION',
          score: 0,
          prof: 'MASTER',
          color: 0,
          diecolor: 0,
        },
        dipl: {
          name: 'DIPLOMACY',
          score: 0,
          prof: 'TRAINED',
          color: 0,
          diecolor: 0,
        },
        inti: {
          name: 'INTIMIDATION',
          score: 0,
          prof: 'UNTRAINED',
          color: 0,
          diecolor: 0,
        },
        lore: {
          name: 'LORE',
          score: 0,
          prof: 'EXPERT',
          color: 0,
          diecolor: 0
        },
        medi: {
          name: 'MEDICINE',
          score: 0,
          prof: 'TRAINED',
          color: 0,
          diecolor: 0
        },
        natu: {
          name: 'NATURE',
          score: 0,
          prof: 'UNTRAINED',
          color: 0,
          diecolor: 0
        },
        occu: {
          name: 'OCCULTISM',
          score: 0,
          prof: 'TRAINED',
          color: 0,
          diecolor: 0
        },
        perf: {
          name: 'PERFORMANCE',
          score: 0,
          prof: 'EXPERT',
          color: 0,
          diecolor: 0
        },
        perc: {
          name: 'PERCEPTION',
          score: 0,
          prof: 'MASTER',
          color: 0,
          diecolor: 0
        },
        reli: {
          name: 'RELIGION',
          score: 0,
          prof: 'EXPERT',
          color: 0,
          diecolor: 0
        },
        soci: {
          name: 'SOCIETY',
          score: 0,
          prof: 'LEGENDARY',
          color: 0,
          diecolor: 0
        },
        stel: {
          name: 'STEALTH',
          score: 0,
          prof: 'LEGENDARY',
          color: 0,
          diecolor: 0
        },
        surv: {
          name: 'SUURVIVAL',
          score: 0,
          prof: 'TRAINED',
          color: 0,
          diecolor: 0,
        },
        thie: {
          name: 'THIEVERY',
          score: 0,
          prof: 'MASTER',
          color: 0,
          diecolor: 0,
        },
      },
      util: util,
      stat: stat,
    };
  },
  watch: {
  'util.playerselected': {
      handler() {
      console.log("what is the player selected" + this.util.playerselected)
      this.skills.acro.score = this.stat.tokens.pcs[this.util.playerselected].skills.Acrobatics[0];
      this.skills.arc.score = this.stat.tokens.pcs[this.util.playerselected].skills.Arcana[0];
      this.skills.athl.score = this.stat.tokens.pcs[this.util.playerselected].skills.Athletics[0];
      this.skills.craf.score = this.stat.tokens.pcs[this.util.playerselected].skills.Crafting[0];
      this.skills.dece.score = this.stat.tokens.pcs[this.util.playerselected].skills.Deception[0];
      this.skills.dipl.score = this.stat.tokens.pcs[this.util.playerselected].skills.Diplomacy[0];
      this.skills.inti.score = this.stat.tokens.pcs[this.util.playerselected].skills.Intimidate[0];
      this.skills.lore.score = this.stat.tokens.pcs[this.util.playerselected].skills.Lore[0];
      this.skills.medi.score = this.stat.tokens.pcs[this.util.playerselected].skills.Medicine[0];
      this.skills.natu.score = this.stat.tokens.pcs[this.util.playerselected].skills.Nature[0];
      this.skills.occu.score = this.stat.tokens.pcs[this.util.playerselected].skills.Occultism[0];
      this.skills.perf.score = this.stat.tokens.pcs[this.util.playerselected].skills.Performance[0];
      this.skills.perc.score = this.stat.tokens.pcs[this.util.playerselected].skills.Perception[0];
      this.skills.reli.score = this.stat.tokens.pcs[this.util.playerselected].skills.Religion[0];
      this.skills.soci.score = this.stat.tokens.pcs[this.util.playerselected].skills.Society[0];
      this.skills.stel.score = this.stat.tokens.pcs[this.util.playerselected].skills.Stealth[0];
      this.skills.surv.score = this.stat.tokens.pcs[this.util.playerselected].skills.Survival[0];
      this.skills.thie.score = this.stat.tokens.pcs[this.util.playerselected].skills.Thievery[0];

    },
    deep: true
  },
},
  mounted() {
    if (this.util.playerselected) {
      this.skills.acro.score = this.stat.tokens.pcs[this.util.playerselected].skills.Acrobatics[0];
      this.skills.arc.score = this.stat.tokens.pcs[this.util.playerselected].skills.Arcana[0];
      this.skills.athl.score = this.stat.tokens.pcs[this.util.playerselected].skills.Athletics[0];
      this.skills.craf.score = this.stat.tokens.pcs[this.util.playerselected].skills.Crafting[0];
      this.skills.dece.score = this.stat.tokens.pcs[this.util.playerselected].skills.Deception[0];
      this.skills.dipl.score = this.stat.tokens.pcs[this.util.playerselected].skills.Diplomacy[0];
      this.skills.inti.score = this.stat.tokens.pcs[this.util.playerselected].skills.Intimidate[0];
      this.skills.lore.score = this.stat.tokens.pcs[this.util.playerselected].skills.Lore[0];
      this.skills.medi.score = this.stat.tokens.pcs[this.util.playerselected].skills.Medicine[0];
      this.skills.natu.score = this.stat.tokens.pcs[this.util.playerselected].skills.Nature[0];
      this.skills.occu.score = this.stat.tokens.pcs[this.util.playerselected].skills.Occultism[0];
      this.skills.perf.score = this.stat.tokens.pcs[this.util.playerselected].skills.Performance[0];
      this.skills.perc.score = this.stat.tokens.pcs[this.util.playerselected].skills.Perception[0];
      this.skills.reli.score = this.stat.tokens.pcs[this.util.playerselected].skills.Religion[0];
      this.skills.soci.score = this.stat.tokens.pcs[this.util.playerselected].skills.Society[0];
      this.skills.stel.score = this.stat.tokens.pcs[this.util.playerselected].skills.Stealth[0];
      this.skills.surv.score = this.stat.tokens.pcs[this.util.playerselected].skills.Survival[0];
      this.skills.thie.score = this.stat.tokens.pcs[this.util.playerselected].skills.Thievery[0];
    } else {
      this.skills.acro.score =0
      this.skills.arc.score = 0
      this.skills.athl.score =0
      this.skills.craf.score =0
      this.skills.dece.score =0
      this.skills.dipl.score =0
      this.skills.inti.score =0
      this.skills.lore.score =0
      this.skills.medi.score =0
      this.skills.natu.score =0
      this.skills.occu.score =0
      this.skills.perf.score =0
      this.skills.perc.score =0
      this.skills.reli.score =0
      this.skills.soci.score =0
      this.skills.stel.score =0
      this.skills.surv.score =0
      this.skills.thie.score =0
    }
    this.skills.acro.color = this.util.colors.untr;
    this.skills.acro.diecolor = this.util.colors.dex;

    this.skills.arc.color = this.util.colors.trai;
    this.skills.arc.diecolor = this.util.colors.int;

    this.skills.athl.color = this.util.colors.expe;
    this.skills.athl.diecolor = this.util.colors.str;

    this.skills.craf.color = this.util.colors.untr;
    this.skills.craf.diecolor = this.util.colors.int;

    this.skills.dece.color = this.util.colors.mast;
    this.skills.dece.diecolor = this.util.colors.cha;

    this.skills.dipl.color = this.util.colors.trai;
    this.skills.dipl.diecolor = this.util.colors.cha;

    this.skills.inti.color = this.util.colors.untr;
    this.skills.inti.diecolor = this.util.colors.cha;

    this.skills.lore.color = this.util.colors.expe;
    this.skills.lore.diecolor = this.util.colors.int;

    this.skills.medi.color = this.util.colors.trai;
    this.skills.medi.diecolor = this.util.colors.wis;

    this.skills.natu.color = this.util.colors.untr;
    this.skills.natu.diecolor = this.util.colors.wis;

    this.skills.occu.color = this.util.colors.trai;
    this.skills.occu.diecolor = this.util.colors.int;

    this.skills.perf.color = this.util.colors.expe;
    this.skills.perf.diecolor = this.util.colors.cha;

    this.skills.perc.color = this.util.colors.mast;
    this.skills.perc.diecolor = this.util.colors.wis;

    this.skills.reli.color = this.util.colors.expe;
    this.skills.reli.diecolor = this.util.colors.wis;

    this.skills.soci.color = this.util.colors.lege;
    this.skills.soci.diecolor = this.util.colors.int;

    this.skills.stel.color = this.util.colors.lege;
    this.skills.stel.diecolor = this.util.colors.dex;

    this.skills.surv.color = this.util.colors.trai;
    this.skills.surv.diecolor = this.util.colors.wis;

    this.skills.thie.score = 0;
    this.skills.thie.color = this.util.colors.mast;
    this.skills.thie.diecolor = this.util.colors.dex;

  }
})


</script>

