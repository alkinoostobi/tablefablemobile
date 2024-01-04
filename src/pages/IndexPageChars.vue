<template>
  <q-page class="flex flex-center">
    <box-component-chars v-for="(char, charindex) in chars" :key="'charindex'+charindex"
                         :name="char.name"
                         :more="char.more"
                         :str="char.str" :dex="char.dex" :con="char.con" :int="char.int" :wis="char.wis" :cha="char.cha"
                         :hpcolor="char.hpcolor" :accolor="char.accolor"
                         :health="char.health" :aclass="char.aclass"></box-component-chars>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentChars from 'components/boxComponentChars.vue'
import savesComponent from "components/savesComponent.vue";
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";

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
          name: "ZASALAMPOUSTIS",
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
          name: "MBUSSY",
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
    this.chars.char1.str = this.stats.character1.modifiers.str;
    this.chars.char1.dex = this.stats.character1.modifiers.dex;
    this.chars.char1.con = this.stats.character1.modifiers.con;
    this.chars.char1.int = this.stats.character1.modifiers.int;
    this.chars.char1.wis = this.stats.character1.modifiers.wis;
    this.chars.char1.cha = this.stats.character1.modifiers.cha;
    this.chars.char1.health = 10 + this.stats.character1.modifiers.con;
    this.chars.char1.aclass = 10 + this.stats.character1.modifiers.dex;
    this.chars.char1.hpcolor = this.utilities.colors.heal;
    this.chars.char1.accolor = this.utilities.colors.acla;

    this.chars.char2.str = this.stats.character2.modifiers.str;
    this.chars.char2.dex = this.stats.character2.modifiers.dex;
    this.chars.char2.con = this.stats.character2.modifiers.con;
    this.chars.char2.int = this.stats.character2.modifiers.int;
    this.chars.char2.wis = this.stats.character2.modifiers.wis;
    this.chars.char2.cha = this.stats.character2.modifiers.cha;
    this.chars.char2.health = 12 + this.stats.character2.modifiers.con;
    this.chars.char2.aclass = 10 + this.stats.character2.modifiers.dex;
    this.chars.char2.hpcolor = this.utilities.colors.heal;
    this.chars.char2.accolor = this.utilities.colors.acla;
  }
})
</script>
