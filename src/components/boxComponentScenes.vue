<template>
  <div class="outer-box" style="width: 20rem; height: 15rem">
    <div class="image-container"><img :src="background" class="background-style"></div>
    <div class="text-container">
      <div class="Story_desc" v-text="desc"></div>
    </div>
    <inner-box-component :mode="'text'" :font-size="12" :position="'tl'" :icon-width="'10'" :icon-height="'2'"
                         :backgroundcolor="namecolor"
                         :text='name'></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="15" :position="'bl'" :icon-width="'8'" :icon-height="'2'"
                         :backgroundcolor="'#545353'"
                         :text='more'></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'br'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#FF5252'"
                         :icon="'cloud'" v-on:click="loadscene()"></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'br'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#52D5FF'"
                         :icon="'music'" :margin="45"></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'tr'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#FF5252'"
                         :icon="'edit'"></inner-box-component>

  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import {utilitiesStore} from "stores/utilities";
import {DMStores} from "stores/DMStores";
import socket from "../boot/socket"

const dmstuff = DMStores();

export default {
  name: 'boxComponentScenes',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second: false
    };
  },
  props: {
    name: {
      type: String,
      default: 'default',
    },
    more: {
      type: String,
      default: 'default',
    },
    desc: {
      type: String,
      default: 'default',
    },
    background: {
      type: String,
      default: 'default',
    },
    map: {
      type: String,
      default: 'default',
    },
    namecolor: {
      type: Number,
      default: 0,
    },
    dmstuff: dmstuff,
  },
  mounted() {
  },
  components: {
    innerBoxComponent
  },
  methods: {
    utilitiesStore,
    test() {
      console.log('test');
    },
    loadscene() {
      socket.emit('loadscene', this.map);
      console.log("12312312")
    }
  }
};
</script>

<style scoped>
.image-container {
  margin-left: 50%;
}

.background-style {
  width: 50%;
  height: 112%;
}

.text-container {
  width: 50%;
}

.Story_desc {
  text-align: left;
  font-size: 0.9rem;
  width: 60%;
  text-overflow: ellipsis;
}
</style>
