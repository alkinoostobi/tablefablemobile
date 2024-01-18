

<template>
  <q-page class="flex flex-center" style="align-content: flex-start;
    flex-direction: row; flex-wrap: wrap;row-gap: 2.5rem;
    margin-top: 4rem">
    <div v-if="util.playerselected === null">
      <label for="character-select">Select a character:</label>
      <select id="character-select" v-model="util.playerselected">
        <option v-for="(character, index) in characters" :key="index" :value="character">
          {{ character }}
        </option>
      </select>
    </div>
    <div v-else class="flex flex-center" style="align-content: flex-start;
    flex-direction: row; flex-wrap: wrap;row-gap: 2.5rem;
    margin-top: 4rem">
      <box-component v-for="(stat, statindex) in stats" :key="'statindex'+statindex" :stat-modifier="stat.modifier"
                     :stat-name="stat.name" :stat-score="stat.score" :stat-color="stat.color"></box-component>
      <savesComponent v-if="false"></savesComponent>
    </div>
  </q-page>
</template>


<script>
import {defineComponent} from 'vue'
import boxComponent from 'components/boxComponent.vue'
import savesComponent from "components/savesComponent.vue";
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";

const stat = Statstore();
const util = utilitiesStore();
export default defineComponent({
  name: 'IndexPage',
  components: {
    boxComponent,
    savesComponent
  },
  data() {
    return {
      selectedCharacter: null,
      characters: [],
      show_second: false,
      stats: {
        'str': {
          'name': 'STRENGTH',
          'score': 1,
          'modifier': 0,
          'color': 0,
        },
        'dex': {
          'name': 'DEXTERITY',
          'score': 0,
          'modifier': 0,
          'color': 0
        },
        'con': {
          'name': 'CONSTITUTION',
          'score': 0,
          'modifier': 0,
          'color': 0
        },
        'int': {
          'name': 'INTELLIGENCE',
          'score': 0,
          'modifier': 0,
          'color': 0,
        },
        'wis': {
          'name': 'WISDOM',
          'score': 0,
          'modifier': 0,
          'color': 0,
        },
        'cha': {
          'name': 'CHARISMA',
          'score': 0,
          'modifier': 0,
          'color': 0,
        },
      },
      stat: stat,
      util: util,
    };
  },
  watch: {
    'util.playerselected'(newCharacter) {
      this.util.playerselected = newCharacter;
      if (newCharacter) {
        this.stats.str.score = this.stat.tokens.pcs[newCharacter].stats.str[0];
    this.stats.dex.score = this.stat.tokens.pcs[newCharacter].stats.dex[0];
    this.stats.con.score = this.stat.tokens.pcs[newCharacter].stats.con[0];
    this.stats.int.score = this.stat.tokens.pcs[newCharacter].stats.int[0];
    this.stats.wis.score = this.stat.tokens.pcs[newCharacter].stats.wis[0];
    this.stats.cha.score = this.stat.tokens.pcs[newCharacter].stats.cha[0];

    this.stats.str.modifier = this.stat.tokens.pcs[newCharacter].stats.str[1];
    this.stats.dex.modifier = this.stat.tokens.pcs[newCharacter].stats.dex[1];
    this.stats.con.modifier = this.stat.tokens.pcs[newCharacter].stats.con[1];
    this.stats.int.modifier = this.stat.tokens.pcs[newCharacter].stats.int[1];
    this.stats.wis.modifier = this.stat.tokens.pcs[newCharacter].stats.wis[1];
    this.stats.cha.modifier = this.stat.tokens.pcs[newCharacter].stats.cha[1];

      }
    }
  },
  mounted() {
    this.characters = Object.keys(stat.tokens.pcs);
    this.stats.str.score = this.stat.tokens.pcs.pl1.stats.str[0];
    this.stats.dex.score = this.stat.tokens.pcs.pl1.stats.dex[0];
    this.stats.con.score = this.stat.tokens.pcs.pl1.stats.con[0];
    this.stats.int.score = this.stat.tokens.pcs.pl1.stats.int[0];
    this.stats.wis.score = this.stat.tokens.pcs.pl1.stats.wis[0];
    this.stats.cha.score = this.stat.tokens.pcs.pl1.stats.cha[0];

    this.stats.str.modifier = this.stat.tokens.pcs.pl1.stats.str[1];
    this.stats.dex.modifier = this.stat.tokens.pcs.pl1.stats.dex[1];
    this.stats.con.modifier = this.stat.tokens.pcs.pl1.stats.con[1];
    this.stats.int.modifier = this.stat.tokens.pcs.pl1.stats.int[1];
    this.stats.wis.modifier = this.stat.tokens.pcs.pl1.stats.wis[1];
    this.stats.cha.modifier = this.stat.tokens.pcs.pl1.stats.cha[1];

    this.stats.str.color = this.util.colors.str;
    this.stats.dex.color = this.util.colors.dex;
    this.stats.con.color = this.util.colors.con;
    this.stats.int.color = this.util.colors.int;
    this.stats.wis.color = this.util.colors.wis;
    this.stats.cha.color = this.util.colors.cha;


  }
})
</script>
