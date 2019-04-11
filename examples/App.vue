<template>
  <div id="app">
    <div class="sb_scroll-span_example">
      <div class="sb_title">
        Vue Scroll Span
      </div>
      <div class="sb_controls">
        <div class="sb_control">
          <label for="duration">Duration</label>
          <input
            v-model.number="duration"
            type="number"
            name="duration"
            min="0"
            step="100"
          >
        </div>
        <div class="sb_control">
          <label for="easing">Easing</label>
          <select
            v-model="easing"
            name="easing"
          >
            <option
              v-for="easingFunctionName in easingFunctionNames"
              :key="easingFunctionName"
              :value="easingFunctionName"
            >
              {{ easingFunctionName }}
            </option>
          </select>
        </div>
        <div class="sb_control">
          <label for="rtl">RTL</label>
          <input
            v-model="rtl"
            type="checkbox"
            name="rtl"
          >
        </div>
      </div>
      <div class="sb_scroll-span_container">
        <ScrollSpan
          :duration="duration"
          :easing="easing"
          :loop="true"
          :loop-delay="1000"
          :style="{ width: '150px' }"
          :rtl="rtl"
        >
          The quick brown fox jumps over the lazy dog
        </ScrollSpan>
      </div>
    </div>
  </div>
</template>

<script>
import * as EasingFunctions from '../src/utils/easing.js';

export default {
  name: 'App',
  data() {
    return {
      duration: 1000,
      easing: 'easeInOutQuad',
      easingFunctionNames: Object.keys(EasingFunctions),
      rtl: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  justify-content: center;
}

.sb_scroll-span_example {
  display: flex;
  flex-direction: column;
}

.sb_title {
  display: flex;
  font-size: 2rem;
}

.sb_controls {
  padding-top: 1rem;
}

.sb_control {
  display: flex;
  flex: 0 0 50%;
}

.sb_scroll-span_container {
  padding: 1rem 0;
}
</style>
