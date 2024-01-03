<template>
  <div class="outer-box" style="width: 20rem; height: 15rem">
    <div class="Story_desc" v-text="desc"></div>
    <div class="image-container"></div>
    <inner-box-component :mode="'text'" :font-size="12" :position="'tl'" :icon-width="'10'" :icon-height="'2'"
                         :backgroundcolor="namecolor"
                         :text='name'></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="15" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'"
                         :backgroundcolor="'#545353'"
                         :text='more'></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'br'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#FF5252'"
                         :icon="'die'"></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'br'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#52D5FF'"
                         :icon="'die'"></inner-box-component>
    <inner-box-component :mode="'icon'" :position="'tr'" :icon-width="2" :icon-height="'2'" :backgroundcolor="'#FF5252'"
                         :icon="'die'"></inner-box-component>

  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import {utilitiesStore} from "stores/utilities";

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
    namecolor:{
      type: Number,
      default:0,
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
  methods: {
    utilitiesStore,
    test() {
      console.log('test');
    }

  }
};
</script>

<style scoped>

</style>
