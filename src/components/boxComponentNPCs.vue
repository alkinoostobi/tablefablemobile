<template>
  <div class="outer-box">
    <div class="level-text">Level: {{ level }}</div>
    <div class="speed-text">Speed: {{ speed }}</div>
    <div class="perc-text">Perception</div>
    <div class="perc-num">{{ perc }}</div>
    <div class="image-container"><img :src="icon" class="background-style"></div>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :backgroundcolor="'#FF5945'"
                         :text="hp"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :backgroundcolor="'#545353'"
                         :text="ac" :margin="10"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="19" :position="'tl'" :icon-width="10" :icon-height="'2'"
                         :text="name" :backgroundcolor="'#68640B'"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="19" :position="'bl'" :icon-width="10" :icon-height="'2'"
                         :text="'READ MORE'" :backgroundcolor="'#323622'"></inner-box-component>
    <inner-box-component :mode="'icon'" :font-size="19" :position="'tr'" :icon-width="2" :icon-height="'2'"
                         :backgroundcolor="'#52D5FF'" icon="cloud" v-on:click="loadnpc()"></inner-box-component>
  </div>
</template>


<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import {utilitiesStore} from "stores/utilities";
import socket from "../boot/socket";

const util = utilitiesStore();
export default {
  name: 'boxComponentNPCs',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second: false
    };
  },
  props: {
    id: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: 'default',
    },
    speed: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: 'default',
    },
    level: {
      type: Number,
      default: 0,
    },
    hp: {
      type: Number,
      default: 0,
    },
    ac: {
      type: Number,
      default: 0,
    },
    perc: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.show_second = true;
    });
  },
  components: {
    innerBoxComponent
  },
  methods: {
    test() {
      console.log('test');
    },
    loadnpc() {

      socket.emit('loadnpc', (this.id));
      console.log("loadnpc socket!");
    }
  }

};
</script>


<style scoped>
.outer-box {
  width: 20rem;
  height: 15rem;
}

.image-container {
  margin-left: 50%;
}

.level-text {
  position: absolute;
  top: 10%;
  left: 8%;
  font-size: 1.5rem;
}

.speed-text {
  position: absolute;
  top: 25%;
  left: 7%;
  font-size: 1.5rem;
}

.perc-text {
  position: absolute;
  top: 40%;
  left: 5%;
  font-size: 1.5rem;
}

.perc-num {
  position: absolute;
  top: 53%;
  left: 25%;
  font-size: 1.5rem;
  color: #4747FC;
}

.background-style {
  width: 50%;
  height: 112%;
}
</style>
