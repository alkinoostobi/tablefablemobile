<template>
  <div class="outer-box">
    <p class="box_Title_centered">{{ statName }}</p>
    <p class="main_Stat_centered">{{ statModifier >= 0 ? `+${statModifier}` : `-${statModifier}`}}</p>
    <inner-box-component :mode="'text'" :font-size="15" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'" :text="statScore" ></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="15" :position="'tl'" :icon-width="'4'" :icon-height="'2'" :text="'Peos'" backgroundcolor="#3F33FF"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2" :icon-width="2" :position="'br'" :backgroundcolor="'#FC9538'" :icon="'die'" @clicked="test()" :icon-after-click="'shield'"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
export default {
  name: 'boxComponent',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second : false
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
  },
  mounted(){
    this.$nextTick(() => {
      this.show_second = true;
    });
  },
  components :{
    innerBoxComponent
  },
  methods:{
    test(){
      console.log('test');
    }

  }
};
</script>

<style scoped>

</style>
