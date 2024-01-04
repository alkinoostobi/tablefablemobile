<template>
  <div class="inner-box"
       :class="{ 'top-right': position === 'tr', 'top-left': position === 'tl', 'bottom-left': position === 'bl', 'bottom-right': position === 'br' }"
       :style="{
         width: iconWidth === 0 ? 'auto' : `${iconWidth}rem`,
         height: iconHeight === 0 ? 'min-content' : `${iconHeight}rem`,
         fontSize: `${fontSize}px`,
          padding: `${padding}px`,
         backgroundColor: backgroundcolor !== '' ? backgroundcolor : computedBackgroundColor,
         borderRadius: borderRadius !== 0 ? `${borderRadius}rem` : `${computedBorderRadius}rem`,
         outline: `${borderwidth !== 0 ? borderwidth : computedBorderWidth}px solid ${bordercolor !== '' ? bordercolor : computedBorderColor}`,
         transform: `translateY(${position === 'tr' || position === 'tl' ? '-50%' : '50%'})`,
         left: position === 'bl' || position === 'tl' ? `${hasPrevElementWithPositionClass ? margin + calculateLeftPosition() : calculateLeftPosition()}px` : 'auto',
         right: position === 'br' || position === 'tr' ? `${hasPrevElementWithPositionClass ? margin + calculateLeftPosition() : calculateLeftPosition()}px` : 'auto',
       }"
       @click="emmit2parent()">
    <template v-if="mode === 'text'"><span style="text-align: center;" :style="{lineHeight : iconHeight === 0 ? 'min-content' : `${iconHeight}rem`}">{{ text }}</span></template>
    <template v-else-if="mode === 'icon'">
      <img :src="utilities.icons[iconOut]" alt="icon" style="max-width: 100%; max-height: 100%;">
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
      hasPrevElementWithPositionClass: false,
      positionTranslate : {
        'tr' : 'top-right',
        'tl' : 'top-left',
        'bl' : 'bottom-left',
        'br' : 'bottom-right'
      },
      loaded : false,
      clicked : false,
      iconOut : '',
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
      default: 'default',
    },
    margin:{
      type: Number,
      default: 50,
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
      default: 0,
    },
    iconHeight: {
      type: Number,
      default: 0,
    },
    padding: {
      type: Number,
      default: 7,
    },
    position: {
      type: String,
      default: 'tr',
    },
    bordercolor: {
      type: String,
      default: '',
    },
    borderwidth: {
      type: Number,
      default: 0,
    },
    backgroundcolor: {
      type: String,
      default: '',
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
    textColor: {
      type: String,
      default: '',
    },
    iconAfterClick: {
      type: String,
      default: '',
    },
  },
  watch: {
    position(newPosition) {
      // Watch for changes in the 'position' prop
      this.updatePrevElementWithPositionClass();
    },
  },
  computed :{
    computedBorderColor() {
      if (!this.loaded) return '#000000';

      const parentElement = this.$el ? this.$el.parentElement : null;
      const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      return parentComputedStyle ? parentComputedStyle.borderColor || '#000000' : '#000000';
    },
    computedBorderWidth() {
      if (!this.loaded) return 1;

      const parentElement = this.$el ? this.$el.parentElement : null;
      const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      return parentComputedStyle ? parseInt(parentComputedStyle.borderWidth) || 1 : 1;
    },
    computedBackgroundColor() {
      if (!this.loaded) return '#ffffff';

      const parentElement = this.$el ? this.$el.parentElement : null;
      const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      return parentComputedStyle ? parentComputedStyle.backgroundColor || '#ffffff' : '#ffffff';
    },
    computedBorderRadius() {
      if (!this.loaded) return 100;

      const parentElement = this.$el ? this.$el.parentElement : null;
      const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      return parentComputedStyle ? parseInt(parentComputedStyle.borderRadius) || 100 : 100;
    },
    computedTextColor() {
      if (!this.loaded) return '#000000';

      const parentElement = this.$el ? this.$el.parentElement : null;
      const parentComputedStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      return parentComputedStyle ? parentComputedStyle.color || '#000000' : '#000000';
    },
  },
  methods: {
    updatePrevElementWithPositionClass() {
      const el = this.$el || this.$el.querySelector('.inner-box');
      this.hasPrevElementWithPositionClass = el && el.previousElementSibling && el.previousElementSibling.classList.contains(this.positionTranslate[this.position]);
      console.log(this.hasPrevElementWithPositionClass)
      },
    calculateLeftPosition() {
      if(!this.loaded){
        return 0;
      }
        this.updatePrevElementWithPositionClass();
        const el = this.$el || this.$el.querySelector('.inner-box');

        if (el && el.previousElementSibling && this.hasPrevElementWithPositionClass) {
          const margin = this.margin;
          const previousElementWidth = el.previousElementSibling.offsetWidth;

          return margin + previousElementWidth;
        }

        return 0;
    },
    emmit2parent(){
      if(this.iconAfterClick){
        if(this.clicked){
          this.iconOut = this.icon;
          this.clicked = false;
        }else{
          this.iconOut = this.iconAfterClick;
          this.clicked = true;
        }
      }
      this.$emit('clicked')
    }
  },
  mounted() {
    this.loaded = true;
    this.iconOut = this.icon;
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
  right: 0;
}

.top-left {
  top: 0;
  left: 0;
}

.inner-box {
  position: absolute;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 0.5rem;
  min-height: 0.5rem;
  transition: transform 0.3s ease;
}
</style>
