<template>
  <div class="outer-box" style="width: 20rem">
    <p class="box_Title_Left">{{ name }}</p>
    <p class="Skill1">{{ str >= 0 ? `+${str}` : `${str}` }}</p>
    <p class="SkillN1">{{ "STR" }}</p>
    <p class="Skill2">{{ dex >= 0 ? `+${dex}` : `${dex}` }}</p>
    <p class="SkillN2">{{ "DEX" }}</p>
    <p class="Skill3">{{ con >= 0 ? `+${con}` : `${con}` }}</p>
    <p class="SkillN3">{{ "CON" }}</p>
    <p class="Skill4">{{ int >= 0 ? `+${int}` : `${int}` }}</p>
    <p class="SkillN4">{{ "INT" }}</p>
    <p class="Skill5">{{ wis >= 0 ? `+${wis}` : `${wis}` }}</p>
    <p class="SkillN5">{{ "WIS" }}</p>
    <P class="Skill6">{{ cha >= 0 ? `+${cha}` : `${cha}` }}</P>
    <p class="SkillN6">{{ "CHA" }}</p>
    <p class="Skill1rec"></p>
    <p class="Skill2rec"></p>
    <p class="Skill3rec"></p>
    <p class="Skill4rec"></p>
    <p class="Skill5rec"></p>
    <p class="Skill6rec"></p>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :backgroundcolor="hpcolor"
                         :text="health"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="20" :position="'br'" :icon-width="3" :icon-height="'3'"
                         :backgroundcolor="accolor"
                         :text="aclass" :margin="6"></inner-box-component>
    <inner-box-component :mode="'text'" :font-size="19" :position="'bl'" :icon-width="8" :icon-height="'2'"
                         :text="more"></inner-box-component>
  </div>
</template>

<script>
import innerBoxComponent from "components/innerBoxComponent.vue";
import {utilitiesStore} from "stores/utilities";

const utilities = utilitiesStore();
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
    str: {
      type: Number,
      default: 0,
    },
    dex: {
      type: Number,
      default: 0,
    },
    con: {
      type: Number,
      default: 0,
    },
    int: {
      type: Number,
      default: 0,
    },
    wis: {
      type: Number,
      default: 0,
    },
    cha: {
      type: Number,
      default: 0,
    },
    hpcolor: {
      type: Number,
      default: 0,
    },
    accolor: {
      type: Number,
      default: 0,
    },
    health: {
      type: Number,
      default: 0,
    },
    aclass: {
      type: Number,
      default: 0,
    },
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
.Skill1 {
  position: absolute;
  left: 10%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.Skill2 {
  position: absolute;
  left: 27%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.Skill3 {
  position: absolute;
  left: 43%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.Skill4 {
  position: absolute;
  left: 59%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.Skill5 {
  position: absolute;
  left: 75%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.Skill6 {
  position: absolute;
  left: 90%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.SkillN1 {
  position: absolute;
  left: 11%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.SkillN2 {
  position: absolute;
  left: 27%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.SkillN3 {
  position: absolute;
  left: 43%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.SkillN4 {
  position: absolute;
  left: 60%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.SkillN5 {
  position: absolute;
  left: 75%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.SkillN6 {
  position: absolute;
  left: 91%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.Skill1rec {
  position: absolute;
  left: 10%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

.Skill2rec {
  position: absolute;
  left: 27%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

.Skill3rec {
  position: absolute;
  left: 43%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

.Skill4rec {
  position: absolute;
  left: 59.8%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

.Skill5rec {
  position: absolute;
  left: 75.7%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

.Skill6rec {
  position: absolute;
  left: 92%;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234C2B0DFF' stroke-width='4' stroke-dasharray='2%2c 6%2c 16%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
}

</style>
