<template>
  <svg class="icon">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script lang="ts" setup>
import { string } from 'vue-types';
import { defineProps } from 'vue';
const props = defineProps({
  name: string().isRequired,
});

// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
