<template>
  <div class="inner-box"
       :class="{ 'top-right': position === 'tr', 'top-left': position === 'tl', 'bottom-left': position === 'bl', 'bottom-right': position === 'br' }"
       :style="{
         width: mode === 'text' ? 'auto' : `${iconWidth}rem`,
         height: mode === 'text' ? 'min-content' : `${iconHeight}rem`,
         fontSize: `${fontSize}px`,
         transform: `translateY(${position === 'tr' || position === 'tl' ? '-50%' : '50%'})`,
         left: position === 'bl' || position === 'tl' ? `calc(${hasPrevElementWithPositionClass ? margin : 0}rem + ${calculateLeftPosition()}px)` : 'auto',
         right: position === 'br' || position === 'tr' ? `calc(${hasPrevElementWithPositionClass ? margin : 0}rem + ${calculateLeftPosition()}px)` : 'auto',
       }">
    <template v-if="mode === 'text'">{{ text }}</template>
    <template v-else-if="mode === 'icon'">
      <img :src="utilities.icons[icon]" alt="icon" style="max-width: 100%; max-height: 100%;">
    </template>
  </div>
</template>
<script>
import { utilitiesStore } from "stores/utilities";

const utilities = utilitiesStore();
export default {
  name: "innerBoxComponent",
  data() {
    return {
      utilities: utilities,
      margin: 5, // Adjust the margin as needed
      hasPrevElementWithPositionClass: false,
      positionTranslate : {
        'tr' : 'top-right',
        'tl' : 'top-left',
        'bl' : 'bottom-left',
        'br' : 'bottom-right'
      }
    };
  },
  props: {
    mode: {
      type: String,
      default: 'text',
      validator: value => ['text', 'icon'].includes(value),
    },
    text: {
      type: String,
      default: 'asdasdasasdasdasdasdasd',
    },
    icon: {
      type: String,
      default: '', // Path to the icon
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    iconWidth: {
      type: Number,
      default: 2,
    },
    iconHeight: {
      type: Number,
      default: 2,
    },
    position: {
      type: String,
      default: 'tr',
    },
  },
  watch: {
    position(newPosition) {
      // Watch for changes in the 'position' prop
      this.updatePrevElementWithPositionClass();
    },
  },
  methods: {
    updatePrevElementWithPositionClass() {
      const el = this.$el || this.$el.querySelector('.inner-box');
      this.hasPrevElementWithPositionClass = el && el.previousElementSibling && el.previousElementSibling.classList.contains(this.positionTranslate[this.position]);
      console.log(this.hasPrevElementWithPositionClass)
      },
    calculateLeftPosition() {
      this.$nextTick(() => {
        this.updatePrevElementWithPositionClass();
        const el = this.$el || this.$el.querySelector('.inner-box');
        if (el && el.previousElementSibling && this.hasPrevElementWithPositionClass) {
          console.log('///////////////////////')
          console.log(this.$el || this.$el.querySelector('.inner-box'))
          console.log(`el ${this.margin} ${el.previousElementSibling.offsetWidth}`)
          console.log('///////////////////////')
          return this.margin + el.previousElementSibling.offsetWidth;
        }

        return 0;
      });
    },
  },
  mounted() {
    this.updatePrevElementWithPositionClass();
  },
};
</script>
<style scoped>
.bottom-left {
  bottom: 0;
  left: 0;
}

.top-right {
  top: 0;
  right: 0;
}

.bottom-right {
  bottom: 0;
  right: 0;`
}

.top-left {
  top: 0;
  left: 0;
}

.inner-box {
  position: absolute;
  background-color: #3498db;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 2rem;
  min-height: 2rem;
  transition: transform 0.3s ease;
}
</style>
