<template>
  <q-page class="flex flex-center" style="margin-top: 8rem;
    display: flex;
    row-gap: 3rem;
    flex-wrap: wrap;
    align-content: flex-start;">
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
import {equipstore} from "stores/equipstore";

const equip = equipstore();
const util = utilitiesStore();
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
          'name': '',
          'more': 'READ MORE',
          'num': '2d8',
          'color': '#0C6915',
          'image': '',
          'desc': "",
          'diecolor': '#FF5252',
        },
        'armor': {
          'name': '',
          'more': 'READ MORE',
          'num': '',
          'color': '#323622',
          'image': '',
          'desc': "",
          'diecolor': '#FF5252',
        },
        'shield': {
          'name': '',
          'more': 'READ MORE',
          'num': '',
          'color': '#323622',
          'image': '',
          'desc': "",
          'diecolor': '#FF5252',
        },
      },
      equip: equip,
      util: util,
    };
  },
  mounted() {
    this.equipments.weapon.name = this.equip.weapons.flail.name;
    this.equipments.weapon.desc = this.equip.weapons.flail.desc;
    this.equipments.weapon.num = this.equip.weapons.flail.num;
    this.equipments.weapon.color = this.equip.weapons.flail.color;
    this.equipments.weapon.image = this.equip.weapons.flail.image;

    this.equipments.armor.name = this.equip.armors.LeathAm.name;
    this.equipments.armor.desc = this.equip.armors.LeathAm.desc;
    this.equipments.armor.num = this.equip.armors.LeathAm.num;
    this.equipments.armor.color = this.equip.armors.LeathAm.color;
    this.equipments.armor.image = this.equip.armors.LeathAm.image;

    this.equipments.shield.name = this.equip.shields.name
    this.equipments.shield.desc = this.equip.shields.desc
    this.equipments.shield.num = this.equip.shields.num
    this.equipments.shield.color = this.equip.shields.color;
    this.equipments.shield.image = this.equip.shields.image;
  }
})
</script>
