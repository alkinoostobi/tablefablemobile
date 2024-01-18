<template>
    <q-page class="flex flex-center" style="margin-top: 6rem;
    display: flex;
    row-gap: 3rem;
    flex-wrap: wrap;
    align-content: flex-start;">
    <box-component-scenes v-for="(scene, sceneindex) in scenes" :key="'sceneindex'+sceneindex"
                          :name="scene.name" :more="scene.more" :desc="scene.desc" :background="scene.background"
                          :map="scene.map"
                          :namecolor="scene.namecolor"
    ></box-component-scenes>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentScenes from "components/boxComponentScenes.vue";
import savesComponent from "components/savesComponent.vue";
import {DMStores} from "stores/DMStores";

const dmstuff = DMStores();
export default defineComponent({
  name: 'IndexPageScenes',
  components: {
    boxComponentScenes,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      scenes: {
        'tavern': {
          'name': '',
          'more': 'READ NOTES',
          'desc': '',
          'background': '',
          'map':'',
          'namecolor': '#0C6915',
        },
        'forest': {
          'name': '',
          'more': 'READ NOTES',
          'desc': '',
          'background': '',
          'map':'',
          'namecolor': '#0C6915',
        },
      },
      dmstuff:dmstuff,
    };
  },
  mounted() {
    this.scenes.tavern.name = this.dmstuff.scenes.scene_1.place;
    this.scenes.tavern.desc = this.dmstuff.scenes.scene_1.desc;
    this.scenes.tavern.background = this.dmstuff.scenes.scene_1.background
    this.scenes.tavern.map = this.dmstuff.scenes.scene_1.map;

    this.scenes.forest.name = this.dmstuff.scenes.scene_2.place;
    this.scenes.forest.desc = this.dmstuff.scenes.scene_2.desc;
    this.scenes.forest.background = this.dmstuff.scenes.scene_2.background;
    this.scenes.forest.map = this.dmstuff.scenes.scene_2.map;

  }
})
</script>
