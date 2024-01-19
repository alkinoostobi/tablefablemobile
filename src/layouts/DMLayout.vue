<template>
  <div>
    <div class="square">
      <div class="dm-menu-box">
        <p class="current-menu">{{ currentmenu }}</p>
      </div>
      <div class="outer-box">
        <p class="box_Title">Mode Select</p>
        <p class="free-roam-text">Free Roam</p>
        <p class="explore-box" v-on:click="exploremode">
          <img :src="util.icons.compass" class="icon-style"/>
        </p>
        <p class="pause-text">Pause</p>
        <p class="pause-box" v-on:click="pausegame">
          <img :src="util.icons.pause" class="icon-style"/>
        </p>
        <p class="combat-text">Combat</p>
        <p class="combat-box" v-on:click="combatmode">
          <img :src="util.icons.combat" class="icon-style"/>
        </p>
      </div>
    </div>
    <section class="menu menu--circle">
      <input type="checkbox" id="menu__active"/>
      <label for="menu__active" class="menu__active">
        <div class="menu__toggle">
          <div class="icon">
            <div class="hamburger"></div>
          </div>
        </div>
        <input type="radio" name="arrow--up" id="degree--up-0"/>
        <input type="radio" name="arrow--up" id="degree--up-1"/>
        <input type="radio" name="arrow--up" id="degree--up-2"/>
        <div class="menu__listings">
          <ul class="circle">
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a class="button" @click="navigateToCharsPage"
                     :class="{ 'active-menu': currentmenu === 'CHARACTERS' }"><img :src="util.icons.party"
                                                                                   style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a class="button" @click="navigateToEquipmentPage"
                     :class="{ 'active-menu': currentmenu === 'EQUIPMENT' }"><img :src="util.icons.equips"
                                                                                  style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a
                    href="https://steamuserimages-a.akamaihd.net/ugc/1817759587123704431/E329A7933735ACE37274B794702F5A72CB0275A8/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a
                    href="https://steamuserimages-a.akamaihd.net/ugc/1817759587123704431/E329A7933735ACE37274B794702F5A72CB0275A8/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a
                    href="https://steamuserimages-a.akamaihd.net/ugc/1817759587123704431/E329A7933735ACE37274B794702F5A72CB0275A8/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a href="#" class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a
                    href="https://steamuserimages-a.akamaihd.net/ugc/1817759587123704431/E329A7933735ACE37274B794702F5A72CB0275A8/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a
                    href="https://steamuserimages-a.akamaihd.net/ugc/1817759587123704431/E329A7933735ACE37274B794702F5A72CB0275A8/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    class="button"><img :src="util.icons.wip" style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a class="button" @click="navigateToNPCsPage"
                     :class="{ 'active-menu': currentmenu === 'NPCs' }"><img :src="util.icons.monster"
                                                                             style="width:5rem"></a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a class="button" @click="navigateToScenesPage"
                     :class="{ 'active-menu': currentmenu === 'SCENES' }"><img :src="util.icons.map" style="width:5rem"></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="menu__arrow menu__arrow--top">
          <ul>
            <li>
              <label for="degree--up-0">
                <div class="arrow"></div>
              </label>
              <label for="degree--up-1">
                <div class="arrow"></div>
              </label>
              <label for="degree--up-2">
                <div class="arrow"></div>
              </label>
            </li>
          </ul>
        </div>
      </label>
    </section>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {utilitiesStore} from "stores/utilities";
import socket from "../boot/socket"
export default defineComponent({
  name: "DMLayout",
  data() {
    return {
      currentmenu: "SCENES",
      util: utilitiesStore(),
    };
  },
  methods: {
    updateCurrentMenu(menu) {
      this.currentmenu = menu;
    },
    navigateToScenesPage() {
      this.updateCurrentMenu('SCENES');
      this.$router.push({path: 'scenes'});
      localStorage.setItem('lastSelectedMenu', this.currentmenu);
    },
    navigateToNPCsPage() {
      this.updateCurrentMenu('NPCs');
      this.$router.push({path: 'npcs'});
      localStorage.setItem('lastSelectedMenu', this.currentmenu);
    },
    navigateToCharsPage() {
      this.updateCurrentMenu('CHARACTERS');
      this.$router.push({path: 'chars'});
      localStorage.setItem('lastSelectedMenu', this.currentmenu);
    },
    navigateToEquipmentPage() {
      this.updateCurrentMenu('EQUIPMENT');
      this.$router.push({path: 'equipments'});
      localStorage.setItem('lastSelectedMenu', this.currentmenu);
    },
    exploremode() {
      socket.emit('exploremode');
    },
    pausegame() {
      socket.emit('pausegame');
    },
    combatmode() {
      socket.emit('combatmode');
    },

  },
  mounted() {
    this.currentmenu = localStorage.getItem('lastSelectedMenu') || null;
  }
})
;
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

.outer-box {
  left: 2rem;
  position: relative;
  top: 25%;
  width: 20rem;
  height: 12rem;
  border-radius: 1.25rem;
  border: 8px solid #4C2B0D;
  color: #F6C99C;
  background: #6E441D;
}

.box_Title {
  text-align: center;
  height: 3rem;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0.5rem;
  left: 9.4rem;
  border-radius: 1.25rem;
  border: 6px solid #4C2B0D;
  color: #F6C99C;
  width: 12rem;
  background: #0C695E;
  font-size: large;
}

.free-roam-text {
  position: absolute;
  top: 30%;
  left: 18%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #f6c99c
}

.explore-box {
  position: absolute;
  top: 65%;
  left: 16%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  color: #f6c99c;
  border-radius: 15%;
}

.explore-box:active {
  background: #4C2B0D;
}

.pause-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #f6c99c
}

.pause-box {
  position: absolute;
  top: 65%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  color: #f6c99c;
  border-radius: 15%;
}

.pause-box:active {
  background: #4C2B0D;
}

.combat-text {
  position: absolute;
  top: 30%;
  left: 82%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: #f6c99c
}

.combat-box {
  position: absolute;
  top: 65%;
  left: 81.5%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  color: #f6c99c;
  border-radius: 15%;
}

.combat-box:active {
  background: #4C2B0D;
}

.icon-style {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
}

.dm-menu-box {
  border-radius: 0 0 0 40px;
  position: absolute;
  width: 10.3rem;
  height: 2.5rem;
  left: 60%;
  background: #6E441D;
}

.current-menu {
  color: #F6C99C;
  font-size: 1.2rem;
  font-style: normal;
  text-align: center;
  font-weight: 100;
  line-height: 1.9;
  padding-inline-start: 1.7rem;
}

body {
  padding: 0;
  margin: 0;
  background-color: black;
  color: black;
}

body * {
  box-sizing: border-box;
}

.icon {
  position: absolute;
  top: 70%;
  left: 70%;
  transform: translateX(-50%) translateY(-50%);
}

.hamburger {
  content: ' ';
  position: relative;
  width: 20px;
  border: 2px solid #F6C99C;
  border-radius: 5px;
  transition: all 0.333333333333333s ease;
}

.hamburger:after,
.hamburger:before {
  content: ' ';
  position: absolute;
  left: 50%;
  width: 100%;
  border: 2px solid #F6C99C;
  border-radius: 5px;
  transform: translateX(-50%);
  transition-property: top, bottom, transform;
  transition-duration: 1s, 1s, 0.25s;
}

.hamburger:after {
  top: -8px;
}

.hamburger:before {
  bottom: -8px;
}

.menu {
  pointer-events: none;
}

.menu--circle {
  position: absolute;
  top: 0%;
  z-index: 13;
  width: 243.33333333333334px;
  height: 243.33333333333334px;
  overflow: hidden;
}

.menu__active {
  position: relative;
}

.menu__toggle {
  z-index: 11;
  position: absolute;
  top: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  background-color: #6E441D;
  border-radius: 50%;
  transition: transform 1.3s;
  cursor: pointer;
  pointer-events: auto;
}

.menu__listings {
  z-index: 10;
  position: absolute;
  top: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  transform: scale(0.1) rotate(150deg);
  transition: transform 1s;
}

.menu__arrow {
  visibility: hidden;
  position: absolute;
}

.menu__arrow input[type="radio"] {
  position: fixed;
  top: -99999px;
  left: -99999px;
}

.menu__arrow ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu__arrow--top {
  top: 0.5em;
  left: 220px;
}

.menu__arrow--top .arrow {
  transform: rotate(-45deg);
}

.menu__arrow--left {
  top: 220px;
  left: 0.5em;
}

.menu__arrow--left .arrow {
  transform: rotate(-135deg);
}

.arrow {
  width: 20px;
  height: 20px;
  border-right: 6.666666666666667px solid #4C2B0D;
  border-top: 6.666666666666667px solid #4C2B0D;
  border-radius: 3px;
  transition: border-color 0.3s;
  cursor: pointer;
  pointer-events: auto;
}

.arrow:hover {
  border-color: #ff947f;
  transition: border-color 0.3s;
}

.circle {
  position: absolute;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 50%;
  transform: rotate(108deg);
  overflow: hidden;
  list-style: none;
}

.circle li {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0 100%;

}

.circle li .placeholder {
  position: absolute;
  left: -100%;
  padding-top: 1.5em;
  width: 200%;
  height: 200%;
  text-align: center;
  transform: skewY(54deg) rotate(18deg);
}

.circle li .placeholder .upside {
  transform: rotate(180deg);
}

.circle li .placeholder a {
  text-decoration: none;
  pointer-events: auto;
}

.circle li .placeholder button {
  pointer-events: auto;

}

.circle li .placeholder .button {
  height: 50%;
  width: 50%;
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
}

.circle li:nth-child(1) {
  transform: rotate(0deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(2) {
  transform: rotate(36deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(3) {
  transform: rotate(72deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(4) {
  transform: rotate(108deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(5) {
  transform: rotate(144deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(6) {
  transform: rotate(180deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(7) {
  transform: rotate(216deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(8) {
  transform: rotate(252deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(9) {
  transform: rotate(288deg) skewY(-54deg);
  background-color: #6E441D;
}

.circle li:nth-child(10) {
  transform: rotate(324deg) skewY(-54deg);
  background-color: #6E441D;
}

#menu__active {
  position: fixed;
  top: -99999px;
  left: -99999px;
}

#menu__active:checked ~ label .menu__listings {
  transform: rotate(10deg) scale(1);
  transition: transform 1s;

}

#menu__active:checked ~ label .menu__toggle {
  background-color: #4C2B0D;
  transition: all 1s;
}

#menu__active:checked ~ label .hamburger {
  border-color: transparent;
  transition: border-color 0.333333333333333s;
}

#menu__active:checked ~ label .hamburger:after {
  top: -2px;
  border-color: #fff;
  transform: translateX(-50%) rotate(45deg);
  transition-property: top, transform;
  transition-duration: 0.25s, 1s;
}

#menu__active:checked ~ label .hamburger:before {
  bottom: -2px;
  border-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
  transition-property: bottom, transform;
  transition-duration: 0.25s, 1s;
}

#menu__active:checked ~ label .button:hover {
  color: #c1264e;
}

#menu__active:checked ~ label .menu__arrow {
  visibility: visible;
  transition: all 1s 1.111111111111111s;
}

#menu__active:checked ~ label .menu__arrow--top label {
  display: none;
}

#menu__active:checked ~ label .menu__arrow--top label[for="degree--up-0"] {
  display: block;
}

#menu__active:checked ~ label #degree--up-0:checked ~ .menu__listings {
  transform: rotate(116deg);
}

#menu__active:checked ~ label #degree--up-0:checked ~ .menu__arrow--top label {
  display: none;
}

#menu__active:checked ~ label #degree--up-0:checked ~ .menu__arrow--top label[for="degree--up-1"] {
  display: block;
}

#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings {
  transform: rotate(224deg);
}

#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings ~ .menu__arrow--top label {
  display: none;
}

#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings ~ .menu__arrow--top label[for="degree--up-2"] {
  display: block;
}

</style>
