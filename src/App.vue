<template>
  <div
    id="app"
    class="orange"
  >
    <Symbols />
    <span>
      <SvgIcon :icon-id="'icon_ui_info'" />
      app version: {{ version }}
    </span>
  </div>
</template>

<script>
import Symbols from '@/components/svg-symbols';

export default {
  name: 'App',
  components: {
    Symbols
  },
  data() {
    return {
      version: process.env.VUE_APP_VERSION
    };
  }
};
</script>

<style lang="scss">
@import '@/styles/app.scss';
.orange {
  color: $brand-primary;
}
</style>
