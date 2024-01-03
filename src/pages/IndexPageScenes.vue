<template>
  <q-page class="flex flex-center">
    <box-component-scenes v-for="(scene, sceneindex) in scenes" :key="'sceneindex'+sceneindex"
                          :name="scene.name" :more="scene.more" :desc="scene.desc"
                          :namecolor="scene.namecolor"
    ></box-component-scenes>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentScenes from "components/boxComponentScenes.vue";
import savesComponent from "components/savesComponent.vue";


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
        'forest': {
          'name': 'Aperstroke Forest',
          'more': 'READ MORE',
          'desc': 'The players are going to find the duergar miners around the psiotree, holding 3 captives and 3 other weird creatures ...',
          'namecolor': '#0C6915',
        },
        'citadel': {
          'name': 'Forbidden Lands',
          'more': 'READ MORE',
          'desc': 'The players are going to find the duergar miners around the psiotree, holding 3 captives and 3 other weird creatures ...',
          'namecolor': '#0C6915',
        },
        'deep': {
          'name': 'Heralds of Deep',
          'more': 'READ MORE',
          'desc': 'The players are going to find the duergar miners around the psiotree, holding 3 captives and 3 other weird creatures ...',
          'namecolor': '#0C6915',
        },
      },
    };
  },
})
</script>
