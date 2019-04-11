<template>
  <div id="app">
    <div class="sb_scroll-span_example">
      <div class="sb_title">
        Vue Scroll Span
      </div>
      <div class="sb_controls">
        <div class="sb_control">
          <label for="duration">Duration:</label>
          <input
            v-model.number="duration"
            type="number"
            name="duration"
            min="0"
            step="100"
          >
        </div>
        <div class="sb_control">
          <label for="easing">Easing:</label>
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
          <label for="loop">Loop:</label>
          <input
            v-model="loop"
            type="checkbox"
            name="loop"
          >
        </div>
        <div class="sb_control">
          <label for="rtl">RTL:</label>
          <input
            v-model="rtl"
            type="checkbox"
            name="rtl"
          >
        </div>
        <div class="sb_control">
          <label for="loopDelay">Loop delay:</label>
          <input
            v-model.number="loopDelay"
            :disabled="!loop"
            type="number"
            name="loopDelay"
            min="0"
            step="100"
          >
        </div>
      </div>
      <div class="sb_scroll-span_container">
        <ScrollSpan
          class="sb_scroll-span"
          :duration="duration"
          :easing="easing"
          :loop="loop"
          :loop-delay="loopDelay"
          :style="{ width: '170px' }"
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
      loop: true,
      loopDelay: 0,
      rtl: false
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

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
  flex: 0 1 600px;
}

.sb_title {
  display: flex;
  font-size: 2rem;
}

.sb_controls {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap
}

.sb_control {
  display: flex;
  flex: 0 0 300px;
  justify-content: space-between;
  padding: 0.4rem;
}

.sb_scroll-span_container {
  padding: 1rem 0.4rem;
}

input {
  transition: color .3s;
}

input[disabled] {
  color: rgba(0, 0, 0, 0.2);
}
</style>
