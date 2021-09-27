<template>
  <Nav v-show="showBottomNav" />
  <router-view />
</template>

<script lang="ts" setup>
import Nav from '@/components/Nav.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const showBottomNav = computed(() => store.state.setting.showBottomNav);
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
