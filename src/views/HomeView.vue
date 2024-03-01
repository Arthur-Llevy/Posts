<template>
  <div class="container">
    <div class="flex gap-10 flex-wrap w-full mx-auto my-4 h-auto align-center justify-center">
      <CardComponent v-for="(post, index) in posts" :key="index" :id="post.id">
        {{ post.content }}
      </CardComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardComponent from '../components/CardComponent/CardComponent.vue';
  import { onBeforeMount, ref } from 'vue';
  import { getAllPosts } from '../services/posts.api'
  import type { Posts } from '@/types/HomeViewTypes';

  let posts = ref<Posts[]>([]);

  onBeforeMount(async () => {
    posts.value = await getAllPosts();
  })
</script>