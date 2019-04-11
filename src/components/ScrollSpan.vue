<template>
  <span
    ref="scrollSpan"
    :class="{ vss_rtl: rtl }"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <slot></slot>
  </span>
</template>

<script>
import * as EasingFunctions from '../utils/easing.js';

export default {
  name: 'ScrollSpan',
  props: {
    duration: {
      type: Number,
      default: 1000
    },
    durationIn: {
      type: Number,
      default: null
    },
    durationOut: {
      type: Number,
      default: null
    },
    easing: {
      type: String,
      default: 'easeInOutQuad',
      validator: value => Object.keys(EasingFunctions).includes(value)
    },
    loop: {
      type: Boolean,
      default: false
    },
    loopDelay: {
      type: Number,
      default: 0
    },
    rtl: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      animationFrameId: null,
      animatedBack: false,
      isAnimatingIn: false,
      isHoveringOver: false,
      localDurationIn: this.durationIn == null ? this.duration : this.durationIn,
      localDurationOut: this.durationOut == null ? this.duration : this.durationOut
    };
  },
  computed: {
    width() {
      return this.$refs.textBox.width();
    },
    animating() {
      return this.animationFrameId != null;
    }
  },
  watch: {
    duration(newDuration) {
      if (this.durationIn == null) {
        this.localDurationIn = newDuration;
      }
      if (this.durationOut == null) {
        this.localDurationOut = newDuration;
      }
    },
    rtl(newRtl) {
      this.$refs.scrollSpan.scrollLeft = newRtl
        ? this.$refs.scrollSpan.scrollWidth
        : 0;
    }
  },
  mounted() {
    if (this.rtl) {
      this.$refs.scrollSpan.scrollLeft = this.$refs.scrollSpan.scrollWidth;
    }
  },
  methods: {
    animateIn() {
      const vue = this;
      this.animate({
        duration: this.localDurationIn,
        easing: EasingFunctions[this.easing],
        draw: (() => {
          const scrollLeftStart = vue.$refs.scrollSpan.scrollLeft;
          return (progress) => {
            // eslint-disable-next-line max-len
            vue.$refs.scrollSpan.scrollLeft = scrollLeftStart + (this.rtl ? -1 : 1) * (vue.$refs.scrollSpan.scrollWidth * progress);
          };
        })(),
        isAnimatingIn: true
      });
    },
    animateOut() {
      const vue = this;

      // Don't restart the animateOut animation if it's already in progress.
      if (this.animating && !this.isAnimatingIn) {
        return;
      }

      this.animate({
        duration: this.localDurationOut,
        easing: EasingFunctions[this.easing],
        draw: (() => {
          const scrollLeftStart = vue.$refs.scrollSpan.scrollLeft;
          return (progress) => {
            // eslint-disable-next-line max-len
            vue.$refs.scrollSpan.scrollLeft = scrollLeftStart - (this.rtl ? -1 : 1) * (vue.$refs.scrollSpan.scrollWidth * progress);
          };
        })(),
        isAnimatingIn: false
      });
    },
    animate({ isAnimatingIn, easing, draw, duration }) {
      const start = performance.now();
      const vue = this;

      if (this.animating) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }

      this.isAnimatingIn = isAnimatingIn;

      this.animationFrameId = requestAnimationFrame(function animate(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
          timeFraction = 1;
        }

        // calculate the current animation state
        const progress = easing(timeFraction);

        draw(progress); // draw it

        if (timeFraction < 1) {
          vue.animationFrameId = requestAnimationFrame(animate);
        } else {
          vue.animationFrameId = null;
          vue.animatedBack = !isAnimatingIn;
          if (vue.loop) {
            setTimeout(() => {
              // Only loop the animation if there's no animation in progress
              if (!vue.animating && vue.isHoveringOver) {
                if (isAnimatingIn) {
                  vue.animateOut();
                } else {
                  vue.animateIn();
                }
              }
            }, vue.loopDelay);
          }
        }
      });
    },
    mouseOver() {
      this.isHoveringOver = true;
      this.animateIn();
    },
    mouseLeave() {
      this.isHoveringOver = false;
      this.animateOut();
    }
  }
};
</script>
<style scoped>
span {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
}

span.vss_rtl {}
</style>
