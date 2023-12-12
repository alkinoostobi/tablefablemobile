<template>
  <div class="outer-box">
    <p class="box_Title_Left">Constitution</p>
    <p class="main_Stat_centered">+1</p>
    <inner-box-component :mode="'text'" :font-size="15" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'" :text="'13'" ></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2" :icon-width="2" :position="'br'" :backgroundcolor="'#FC9538'" :icon="'die'" @clicked="test()" :icon-after-click="'shield'"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
export default {
  name: 'saveComponent',
  data() {
    return {
      innerBoxWidth: 100,
      anotherInnerBoxWidth: 200,
      show_second : false
    };
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
.outer-box{
  position: relative;
  width: 24rem;
  height: 12rem;
  border-radius: 1.25rem;
  border: 8px solid #4C2B0D;
  color : #F6C99C;
  background: #6E441D;
}
.box_Title_Left{
  position: absolute;
  top: 1rem;
  left: 5rem;
  transform: translate(-50%, -50%);
  font-size : 1.1rem;
}
.main_Stat_centered{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size : 4rem;
}
</style>
