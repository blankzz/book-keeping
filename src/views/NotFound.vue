<template>
  <div>
    <h1>404 NotFound</h1>
    <p>当前页面不存在，请检查网址是否正确</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onBeforeMount(() => {
  store.commit('SET_NAV_VISIBLE', false);
});

onBeforeUnmount(() => {
  store.commit('SET_NAV_VISIBLE', true);
});
</script>
