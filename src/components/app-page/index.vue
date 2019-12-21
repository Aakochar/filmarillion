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
.header {
  &__text {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    margin: 0 5px;
  }
}

.note {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
  margin: 0 5px;

  &_warning {
    color: #db9a0d;
  }
}
</style>
