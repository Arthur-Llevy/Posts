<template>
    <li class="bg-green-700 text-gray-100 p-2 w-40 text-center hover:text-green-700 hover:bg-gray-100 transition duration-200 border-2 border-green-700">
        <RouterLink :to="(to as RouteLocationRaw)">
            <slot />
        </RouterLink>
    </li>
</template>

<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
    import type { RouteLocationRaw } from 'vue-router';

    defineProps({
        to: {
            type: String,
            required: true
        }
    })
</script>
