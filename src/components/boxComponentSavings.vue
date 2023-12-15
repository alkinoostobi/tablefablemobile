<template>
  <div class="outer-box" style="width: 20rem">
    <p class="box_Title_centered">{{ savingName }}</p>
    <p class="main_Stat_centered">{{ savingSkill }}+{{savingProf}}={{ savingScore}}</p>
    <inner-box-component :mode="'text'" :font-size="13" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'"
                         :text="savingProfTrain" :backgroundcolor="savingProfColor"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2" :icon-width="2" :position="'br'"
                         :backgroundcolor="savingDieColor"
                         :icon="'die'" @clicked="test()" :icon-after-click="'shield'"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";

export default {
  name: 'boxComponentSavings',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second: false
    };
  },
  props: {
    savingName: {
      type: String,
      default: 'default',
    },
    savingSkill: {
      type: Number,
      default: 0,
    },
    savingProf: {
      type: Number,
      default: 0,
    },
    savingScore: {
      type: Number,
      default: 0,
    },
    savingProfTrain: {
      type: String,
      default: 'default',
    },
    savingProfColor: {
      type: Number,
      default: 0,
    },
    savingDieColor: {
      type: Number,
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
