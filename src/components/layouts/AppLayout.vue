<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppLayout",
  setup() {
    const defaultLayout = "AppLayoutDefault";
    const route = useRoute();
    const layout = computed(() => {
      return route.meta.layout || defaultLayout;
    });

    return { layout };
  },
};
</script>
