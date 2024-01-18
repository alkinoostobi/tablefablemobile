<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <div>
    <div class="square">
      <p class="square-button">
        {{ ac }}
        <img :src="util.icons.acicon" class="ac-style"/>
      </p>
      <p class="square-button1" @click="toggleButtons" :class="{ pressed: showbuttons }">
        {{ stats.$state.tokens.pcs[util.playerselected] ? stats.$state.tokens.pcs[util.playerselected].defense.hp : 0}}
        <img :src="util.icons.hpicon" class="hp-style"/>
      </p>
      <div v-if="showbuttons" class="plus-button">
        <p v-on:click="increaseHp()">
          <img :src="util.icons.plus" class="sign-style">
        </p>
        <p v-on:click="decreaseHp()" class="minus-style">
          <img :src="util.icons.minus" class="sign-style">
        </p>
      </div>
      <p class="square-button2">
        {{ perc }}
        <img :src="util.icons.percicon" class="perc-style"/>
      </p>
      <p class="square-button3">
        <img :src="util.icons.blued20" class="die-style"/>
      </p>
      <p class="current-menu">{{ currentmenu }}</p>
      <p
        class="menu-option-1"
        @click="navigateToScoresPage"
        :class="{ 'active-menu': currentmenu === 'ABILITY SCORES' }"
      ></p>
      <p
        class="menu-option-2"
        @click="navigateToSkillsPage"
        :class="{ 'active-menu': currentmenu === 'SKILLS' }"
      ></p>
      <p
        class="menu-option-3"
        @click="navigateToSavingsPage"
        :class="{ 'active-menu': currentmenu === 'SAVING THROWS' }"
      ></p>
      <p
        class="menu-option-4"
        @click="navigateToEquipmentPage"
        :class="{ 'active-menu': currentmenu === 'ITEM NOTES' }"
      ></p>
      <p class="menu-option-5"
         @click="navigateToScenesPage"></p>
    </div>

    <p class="Char_Name">{{ name }}</p>
    <p class="Char_Race_Class">{{ race }} {{ clas }}</p>
    <p class="Char_Level">LEVEL {{ level }}</p>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {Statstore} from "stores/stats";
import {utilitiesStore} from "stores/utilities";
import socket from "../boot/socket";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      stats: Statstore(),
      util: utilitiesStore(),
      hp: 0,
      ac: 0,
      perc: 0,
      name: "def",
      race: "def",
      clas: "def",
      level: 0,
      currentmenu: "ABILITY SCORES",
      showbuttons: false,
    };
  },
  methods: {
    toggleButtons() {
      this.showbuttons = !this.showbuttons;
    },
    increaseHp() {
      this.stats.changeHp(this.util.playerselected, 'pcs', 1)
    },
    decreaseHp() {
      this.stats.changeHp(this.util.playerselected, 'pcs', -1)
    },
    updateCurrentMenu(menu) {
      this.currentmenu = menu;
    },
    navigateToScoresPage() {
      this.updateCurrentMenu('ABILITY SCORES');
      this.$router.push({path: 'scores'});
    },
    navigateToSkillsPage() {
      this.updateCurrentMenu('SKILLS');
      this.$router.push({path: 'skills'});
    },
    navigateToSavingsPage() {
      this.updateCurrentMenu('SAVING THROWS');
      this.$router.push({path: 'savings'});
    },
    navigateToEquipmentPage() {
      this.updateCurrentMenu('ITEM NOTES');
      this.$router.push({path: 'equipments'});
    },
    navigateToScenesPage() {
      this.$router.replace({path: 'scenes'});
    },
  },
  watch: {
  'util.playerselected': {
    handler() {
      this.hp = this.stats.tokens.pcs[this.util.playerselected].defense.hp;
      this.ac = this.stats.tokens.pcs[this.util.playerselected].defense.ac;
      this.perc = this.stats.tokens.pcs[this.util.playerselected].skills.Perception[0];
      this.name = this.stats.tokens.pcs[this.util.playerselected].name;
      this.race = this.stats.tokens.pcs[this.util.playerselected].race.main;
      this.clas = this.stats.tokens.pcs[this.util.playerselected].class;
    },
    deep: true
  },
},
  mounted() {
    this.showbuttons = false;
    this.hp = 0;
    this.ac = 0;
    this.perc = 0;
    this.name = 'No name';
    this.race = 'No race';
    this.clas = 'No class';
    this.level = 1;
    socket.on('deleteToken', (token) => {
      this.$router.push({path: 'died'});
    });
  },
});
</script>

<style scoped>
.square {
  position: relative;
  background-color: #f6c99c;
  margin-bottom: -30%;
  width: 100%;
  height: 20rem;
  border-radius: 0% 0% 36% 18% / 20% 0% 100% 41%;
}

.Char_Name {
  position: absolute;
  top: 3%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #4c2b0d;
  text-align: center;
  font-size: 2.5rem;
}

.Char_Race_Class {
  position: absolute;
  top: 8%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #83633d;
  text-align: center;
  font-size: 1.5rem;
}

.Char_Level {
  position: absolute;
  top: 12%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #83633d;
  text-align: center;
  font-size: 1.2rem;
}

.square-button {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 4.5rem;
  background-color: #4c2b0d;
  color: #f6c99c;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.square-button1 {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 4.5rem;
  background-color: #4c2b0d;
  color: #ff5945;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.square-button2 {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 4.5rem;
  background-color: #4747fc;
  color: #fff;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.square-button3 {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 4.5rem;
  background-color: transparent;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border: 0.3rem solid #4747fc;
  border-radius: 50%;
}

.current-menu {
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #83633d;
  text-align: center;
  font-size: 1.2rem;
}

.menu-option-1 {
  position: absolute;
  top: 70%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: #4c2b0d;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 50%;
}

.menu-option-2 {
  position: absolute;
  top: 70%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: #a77d57;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 50%;
}

.menu-option-3 {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: #a77d57;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 50%;
}

.menu-option-4 {
  position: absolute;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: #a77d57;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 50%;
}

.menu-option-5 {
  position: absolute;
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: #a77d57;
  color: #fff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 50%;
}

.die-style {
  position: relative;
  top: -3%;
  width: 45px;
  height: 45px;
}

.perc-style {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 22%;
  left: 2.1rem;
}

.hp-style {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 22%;
  left: 2.2rem;
  width: 40%;
  height: 40%;
}

.ac-style {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 22%;
  left: 2.2rem;
  width: 35%;
  height: 35%;
}

.active-menu {
  color: red;
}

.plus-button{
  z-index: 10;
  position: absolute;
  top: 30%;
  left: 40%;
  margin-right: 10rem;
}
.sign-style {
  margin-right: 10rem;
  left:50%;
  width: 2.5rem;
  height: 2.5rem;
  background: #a77d57;
  border-radius: 50%;
}

.minus-style {
  margin-left: 1.5rem;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top:0%;
  left: -35%;
  background: #0C695E;
  border-radius: 50%;
}

</style>
