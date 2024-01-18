<template>
  <div class="outer-box">
    <p class="box_Title_centered">{{ statName }}</p>
    <p class="main_Stat_centered">{{ statScore >= 10 ? `+${statModifier}` : `${statModifier}` }}</p>
    <inner-box-component :mode="'text'" :font-size="20" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'"
                         :text="statScore"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2" :icon-width="2" :position="'br'" :backgroundcolor="statColor"
                         :icon="'die'"  v-on:click="rolldie" :icon-after-click="'shield'"></inner-box-component>

  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import socket from "../boot/socket"
import {utilitiesStore} from "stores/utilities";
const util = utilitiesStore();
export default {
  name: 'boxComponent',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second: false,
      util : util,
    };
  },
  props: {
    statName: {
      type: String,
      default: 'default',
    },
    statScore: {
      type: Number,
      default: 0,
    },
    statModifier: {
      type: Number,
      default: 0,
    },
    statColor: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    rolldie() {
      console.log("ROLLMYDICE")
      socket.emit('rolldie', this.util.playerselected);
      console.log("ROLLMYDICE");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show_second = true;
    });
  },
  components: {
    innerBoxComponent
  },

};
</script>

<style scoped></style>
