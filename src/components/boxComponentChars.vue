<template>
  <div class="outer-box" style="width: 20rem">
    <p class="box_Title_Left">{{ name }}</p>
    <p class="Skill1">{{'+2'}}</p>
    <p class="Skill2">{{'+4'}}</p>
    <p class="Skill3">{{'-1'}}</p>
    <p class="Skill4">{{'+2'}}</p>
    <p class="Skill5">{{'+2'}}</p>
    <P class="Skill6">{{'+3'}}</P>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :text="health"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :text="aclass"> </inner-box-component>

  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";

export default {
  name: 'boxComponentChars',
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
      default: "default",
    },
    more: {
      type: String,
      default: 'default',
    },
    health: {
      type: Number,
      default: 0,
    },
    aclass: {
      type: Number,
      default: 0,
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
.Skill1{
  position: absolute;
  left: 15%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.Skill2{
  position: absolute;
  left: 30%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.Skill3{
  position: absolute;
  left: 45%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.Skill4{
  position: absolute;
  left: 60%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.Skill5{
  position: absolute;
  left: 75%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
.Skill6{
  position: absolute;
  left: 90%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
</style>
