# Vue Scroll Span

<p align="center">
  <!-- Add example .gif -->
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-scroll-span">
    <img src="https://img.shields.io/npm/v/vue-scroll-span.svg" alt="Version"/>
  </a>
  <a href="https://www.npmjs.com/package/vue-scroll-span">
    <img src="https://img.shields.io/npm/dt/vue-scroll-span.svg" alt="Downloads"/>
  </a>
  <a href="https://www.npmjs.com/package/vue-scroll-span">
    <img src="https://img.shields.io/npm/l/vue-scroll-span.svg" alt="License"/>
  </a>
</p>

Vue Scroll Span is a Vue component which automatically scrolls on hover if its text content is larger than its width.

## Demo

### Options demo

<a href="https://codesandbox.io/s/y31l4npp09?fontsize=14">
  <img alt="Edit Vue Scroll Span basic  example" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Installation

```Shell
npm install --save vue-scroll-span
```

## Usage

ES6 modules, import components manually.

```HTML
<template>
  <div id="app">
    <ScrollSpan
      :duration="1000"
      easing="easeInOutQuad"
      :loop="true"
      :loop-delay="0"
      :style="{ width: '170px' }"
      :rtl="false"
    >
      The quick brown fox jumps over the lazy dog
    </ScrollSpan>
  </div>
</template>
<script>
import { ScrollSpan } from 'vue-scroll-span';

export default {
  name: 'App',
  components: {
    ScrollSpan
  }
};
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
</style>
```

Register ScrollSpan globally.

```JavaScript
// main.js
import Vue from 'vue';

import VueScrollSpan from 'vue-scroll-span';

import App from './App.vue';

Vue.use(VueScrollSpan);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
```

CommonJS

```JavaScript
const ScrollSpan = require('vue-scroll-span');
```

UMD build in a script tag, this loads the component using the global Vue instance.

```HTML
<script src="https://unpkg.com/vue-scroll-span"></script>
```

### Properties

#### `duration: Number`

The duration of the animations in milliseconds on `mouseover` and `mouseleave`.

Default: `1000`

#### `durationIn: Number`

The duration of the animation in milliseconds on `mouseover`. Overwrites the value of [`duration`](#duration-number).

Default: [`duration`](#duration-number)

#### `durationOut: Number`

The duration of the animation in milliseconds on `mouseleave`. Overwrites the value of [`duration`](#duration-number).

Default: [`duration`](#duration-number)

#### `easing: String`

The `easing` to apply to the scroll animation on mouse hover.

The `easing` function can be one of: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`.

Default: `easeInOutQuad`

#### `loop: Boolean`

Whether the animation on `mouseover` should loop.

Default: `false`

#### `loopDelay: Number`

The delay in milliseconds after which the animation should start looping.

Default: `0`

#### `rtl: Boolean`

Whether the direction of the text should be right to left, also ensures the animation goes from right to left first. Can be useful when displaying file paths.

Default: `false`

## Changelog

[Changelog on Github](https://github.com/stijlbreuk/vue-scroll-span/blob/master/CHANGELOG.md)

## License

[MIT](https://github.com/stijlbreuk/vue-scroll-span/blob/master/LICENSE)
