<template>
  <div class="app-page">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@components/app-header';
import AppFooter from '@components/app-footer';

export default {
  name: 'AppPage',

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
</style>
