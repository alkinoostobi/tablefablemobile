<template>
  <q-page class="flex flex-center">
    <box-component-equipments v-for="(equipment, equipmentindex) in equipments" :key="'equipmentindex'+equipmentindex"
                              :name="equipment.name" :more="equipment.more"
                              :num="equipment.num"
                              :color="equipment.color"
                              :image="equipment.image"
                              :desc="equipment.desc"
                              :diecolor="equipment.diecolor"
    ></box-component-equipments>
    <savesComponent v-if="false"></savesComponent>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import boxComponentEquipments from "components/boxComponentEquipments.vue";
import savesComponent from "components/savesComponent.vue";
import {utilitiesStore} from "stores/utilities";


export default defineComponent({
  name: 'IndexPageEquipments',
  components: {
    boxComponentEquipments,
    savesComponent
  },
  data() {
    return {
      show_second: false,
      equipments: {
        'weapon': {
          'name': 'Flail',
          'more': 'READ MORE',
          'num': '2d8',
          'color': '#0C6915',
          'image': utilitiesStore().icons.sword,
          'desc': "The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail",
          'diecolor':'#FF5252',
        },
        'armor': {
          'name': 'Breastplate',
          'more': 'READ MORE',
          'num': '+1',
          'color': '#323622',
          'image': utilitiesStore().icons.sword,
          'desc': "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in",
          'diecolor':'#FF5252',
        },
        'shield': {
          'name': 'Shield',
          'more': 'READ MORE',
          'num': '+2',
          'color': '#323622',
          'image': utilitiesStore().icons.sword,
          'desc': "The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail",
          'diecolor':'#FF5252',
        },
      },
    };
  },
})
</script>
