<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>
