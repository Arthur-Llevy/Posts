<template>
  <HeaderComponent v-if="isHeaderVisible" />
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterView, useRoute } from 'vue-router'
  import { ref, watch } from 'vue';
  import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
  
  let route = useRoute();
  let isHeaderVisible = ref<boolean>();

  watch(route, () => {
    if(route.path.toString() === '/login' || route.path.toString() === '/createAccount'){
      isHeaderVisible.value = false;
    } else {
      isHeaderVisible.value = true;
    }
  })
</script>
