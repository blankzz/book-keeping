<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/label">Label</router-link>
    |
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
});
</script>
