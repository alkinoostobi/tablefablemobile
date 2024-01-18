<template>
  <div class="outer-box" style="width: 20rem">
    <p class="box_Title_Left">{{ savingName }}</p>
    <p class="Skill_Modifier">{{ savingSkill >= 0 ? `+${savingSkill}` : `${savingSkill}` }}</p>
    <p class="Prof_Modifier">{{ savingProf >= 0 ? `+${savingProf}` : `${savingProf}` }}</p>
    <p class="Saving_Score">{{ savingScore >= 0 ? `+${savingScore}` : `${savingScore}` }}</p>
    <p class="Plus_pos">+</p>
    <p class="Equal_pos">=</p>
    <p class="Skilln_pos">{{ skilln }}</p>
    <p class="Prof_pos">PROF</p>
    <inner-box-component :mode="'text'" :font-size="13" :position="'bl'" :icon-width="'7.5'" :icon-height="'2'"
                         :text="savingProfTrain" :backgroundcolor="savingProfColor"></inner-box-component>
    <inner-box-component :mode="'icon'" :icon-height="2.5" :icon-width="2.5" :position="'br'"
                         :backgroundcolor="savingDieColor"
                         :icon="'die'" @clicked="rolldie()"
                         :icon-after-click="'shield'"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import socket from "../boot/socket"

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
    skilln: {
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
    },
    rolldie() {
      socket.emit('rolldie', 20);
      console.log("ROLLMYDICE");
    },
  }
};
</script>

<style scoped>
.box_Title_Left {
  position: absolute;
  left: 20%;
  top: 1rem;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}

.Skill_Modifier {
  position: absolute;
  left: 15%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 2.3rem;
}

.Prof_Modifier {
  position: absolute;
  left: 48%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 2.3rem;
}

.Saving_Score {
  position: absolute;
  left: 85%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}

.Plus_pos {
  position: absolute;
  left: 32.5%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
}

.Equal_pos {
  position: absolute;
  left: 67%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
}

.Skilln_pos {
  position: absolute;
  left: 15%;
  top: 35%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}

.Prof_pos {
  position: absolute;
  left: 48%;
  top: 35%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}
</style>
