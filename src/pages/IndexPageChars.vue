<template>
  <q-page class="flex flex-center" style="margin-top: 4rem;
    display: flex;
    row-gap: 3rem;
    flex-wrap: wrap;
    align-content: flex-start;">
    <box-component-chars v-for="(char, charindex) in chars" :key="'charindex' + charindex" :name="char.name"
      :more="char.more" :str="char.str" :dex="char.dex" :con="char.con" :int="char.int" :wis="char.wis" :cha="char.cha"
      :hpcolor="char.hpcolor" :accolor="char.accolor" :health="char.health" :aclass="char.aclass"></box-component-chars>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import boxComponentChars from 'components/boxComponentChars.vue'
import savesComponent from "components/savesComponent.vue";
import { Statstore } from "stores/stats";
import { utilitiesStore } from "stores/utilities";

const utilities = utilitiesStore();
const stats = Statstore();
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
        char1: {
          name: 'default',
          more: 'READ MORE',
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0,
          hpcolor: 0,
          accolor: 0,
          health: 10,
          aclass: 10,
        },
        char2: {
          name: 'default',
          more: 'READ MORE',
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0,
          hpcolor: 0,
          accolor: 0,
          health: 10,
          aclass: 10,
        },
      },
      utilities: utilities,
      stats: stats,
    };
  },
  mounted() {
    this.chars.char1.name = this.stats.tokens.pcs.pl1.name
    this.chars.char1.str = this.stats.tokens.pcs.pl1.stats.str[1];
    this.chars.char1.dex = this.stats.tokens.pcs.pl1.stats.dex[1];
    this.chars.char1.con = this.stats.tokens.pcs.pl1.stats.con[1];
    this.chars.char1.int = this.stats.tokens.pcs.pl1.stats.int[1];
    this.chars.char1.wis = this.stats.tokens.pcs.pl1.stats.wis[1];
    this.chars.char1.cha = this.stats.tokens.pcs.pl1.stats.cha[1];
    this.chars.char1.health = this.stats.tokens.pcs.pl1.defense.hp;
    this.chars.char1.aclass = this.stats.tokens.pcs.pl1.defense.ac;
    this.chars.char1.hpcolor = this.utilities.colors.heal;
    this.chars.char1.accolor = this.utilities.colors.acla;

    this.chars.char2.name = this.stats.tokens.pcs.pl2.name;
    this.chars.char2.str = this.stats.tokens.pcs.pl2.stats.str[1];
    this.chars.char2.dex = this.stats.tokens.pcs.pl2.stats.dex[1];
    this.chars.char2.con = this.stats.tokens.pcs.pl2.stats.con[1];
    this.chars.char2.int = this.stats.tokens.pcs.pl2.stats.int[1];
    this.chars.char2.wis = this.stats.tokens.pcs.pl2.stats.wis[1];
    this.chars.char2.cha = this.stats.tokens.pcs.pl2.stats.cha[1];
    this.chars.char2.health = this.stats.tokens.pcs.pl2.defense.hp;
    this.chars.char2.aclass = this.stats.tokens.pcs.pl2.defense.ac;
    this.chars.char2.hpcolor = this.utilities.colors.heal;
    this.chars.char2.accolor = this.utilities.colors.acla;
  }
})
</script>
