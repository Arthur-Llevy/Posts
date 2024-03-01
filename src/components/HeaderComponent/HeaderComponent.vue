<template>
    <header class="w-screen h-auto p-5 bg-gray-100 flex justify-between">
        <h2 class="text-2xl font-medium text-green-700">Vue Posts</h2>
        <ul class="flex justify-between items-center gap-x-10">
            <HeaderLinkComponent to="/">Todos os posts</HeaderLinkComponent>
            <HeaderLinkComponent to="/createPost">Criar post</HeaderLinkComponent>
        </ul>
    </header>
</template>

<script lang="ts" setup>    
    import HeaderLinkComponent from "./HeaderLinkComponent.vue"
</script>