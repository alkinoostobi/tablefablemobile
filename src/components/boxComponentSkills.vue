<template>
  <div class="outer-box">
    <p class="box_Title_centered">{{ skillName }}</p>
    <p class="main_Stat_centered">{{skillScore}}</p>
    <inner-box-component :mode="'text'" :font-size="13" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'"
                         :text="skillProf" :backgroundcolor="skillColor"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2" :icon-width="2" :position="'br'" :backgroundcolor="skillDieColor"
                         :icon="'die'" @clicked="test()" :icon-after-click="'shield'"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";

export default {
  name: 'boxComponentSkills',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second: false
    };
  },
  props: {
    skillName: {
      type: String,
      default: 'default',
    },
    skillScore: {
      type: Number,
      default: 0,
    },
    skillProf: {
      type: String,
      default: 'default',
    },
    skillColor: {
      type: Number,
      default: 0,
    },
    skillDieColor:{
      type:Number,
      default: 0
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
    test() {
      console.log('test');
    }

  }
};
</script>

<style scoped>

</style>
