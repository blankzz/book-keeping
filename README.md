# book-keeping

## 过程经验

### vuex + 导航栏控制

方案是将导航栏挂在在根组件上，通过 vuex 来控制显示与隐藏，代码如下

```vue
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
```

```typescript
import { SETTING_TYPES } from '../types';

interface SettingState {
  showBottomNav: boolean;
}

const state: SettingState = {
  showBottomNav: true,
};

const mutations = {
  [SETTING_TYPES.SET_NAV_VISIBLE](state: SettingState, visible: boolean) {
    state.showBottomNav = visible;
  },
};

export default {
  state,
  mutations,
};
```

如果不想要导航栏，那么只需在不需要的页面将 `showBottomNav` 设置为 `false`，页面销毁时再设置为 `true`  就好，代码如下：

```vue
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
```

### 404 挂载 router 踩坑

> 关键词： *caught* Error: *Catch* *all* *routes* ("*") *must* *now* *be* *defined* *using* *a* *param* *with* *a* *custom* regexp.

众所周知，在 vue2 时挂载 404 页面只需要在 router 的末尾写 path: '*' 通配符，指向 404 页面就可，但是在 vue3 里这种写法会报错，解决方案如下：

```typescript
{
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
```

