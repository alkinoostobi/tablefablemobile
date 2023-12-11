<template>
  <div class="outer-box">
  <inner-box-component :mode="'text'" :font-size="54" :position="'bl'"  :text="'goo'"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="54" :position="'tl'" :text="'roo'"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="54" :position="'br'" :text="'soo'"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="54" :position="'br'" :text="'soo'"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="5" :icon-width="5" :position="'tr'" :icon="'sword'"></inner-box-component>
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
  mounted(){
    this.$nextTick(() => {
      this.show_second = true;
    });
  },
  components :{
    innerBoxComponent
  }
};
</script>

<style>
.outer-box {
  position: relative;
  width: 100%; /* You can adjust the outer box width as needed */
  height: 200px; /* Set the outer box height as needed */
  border: 1px solid #ccc; /* Optional: Add styling for better visualization */
}


</style>
