<template>
  <q-page class="flex flex-center" style="margin-top: 8rem;
    display: flex;
    row-gap: 4rem;
    flex-wrap: wrap;
    align-content: flex-start;">
    <box-component-n-p-cs v-for="(mon, monindex) in mons" :key="'monindex' + monindex" :id="mon.id"
                         :icon="mon.icon" :speed="mon.speed" :name="mon.name"
                         :level="mon.level" :hp="mon.hp" :ac="mon.ac" :perc="mon.perc"></box-component-n-p-cs>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentNPCs from 'components/boxComponentNPCs.vue'
import savesComponent from "components/savesComponent.vue";
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";

const utilities = utilitiesStore();
const stats = Statstore();
export default defineComponent({
  name: 'IndexPageNPCs',
  components: {
    boxComponentNPCs,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      mons: {
        mon1: {
          id: '',
          icon: '',
          speed: 0,
          name: '',
          level: 0,
          hp: 0,
          ac: 0,
          perc:0,
        },
        mon2: {
          id: '',
          icon: '',
          speed: 0,
          name: '',
          level: 0,
          hp: 0,
          ac: 0,
          perc:0,
        }
      },
      utilities: utilities,
      stats: stats,
    };
  },
  mounted() {
    this.mons.mon1.id = this.stats.tokens.npcs.mon1.id;
    this.mons.mon1.icon = this.stats.tokens.npcs.mon1.icon;
    this.mons.mon1.speed = this.stats.tokens.npcs.mon1.speed;
    this.mons.mon1.name = this.stats.tokens.npcs.mon1.name;
    this.mons.mon1.level = this.stats.tokens.npcs.mon1.level;
    this.mons.mon1.hp = this.stats.tokens.npcs.mon1.defense.hp;
    this.mons.mon1.ac = this.stats.tokens.npcs.mon1.defense.ac;
    this.mons.mon1.perc = this.stats.tokens.npcs.mon1.perception;

    this.mons.mon2.id = this.stats.tokens.npcs.mon2.id;
    this.mons.mon2.icon = this.stats.tokens.npcs.mon2.icon;
    this.mons.mon2.speed = this.stats.tokens.npcs.mon2.speed;
    this.mons.mon2.name = this.stats.tokens.npcs.mon2.name;
    this.mons.mon2.level = this.stats.tokens.npcs.mon2.level;
    this.mons.mon2.hp = this.stats.tokens.npcs.mon2.defense.hp;
    this.mons.mon2.ac = this.stats.tokens.npcs.mon2.defense.ac;
    this.mons.mon2.perc = this.stats.tokens.npcs.mon2.perception;
  }
})
</script>
