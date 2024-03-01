<template>
    <button v-if="color === 'primary'" class="border-2 border-green-500 bg-green-500 p-2 m-2 w-36 rounded-sm text-gray-100 block hover:text-green-500 hover:bg-gray-100 transition duration-200">
        <slot />
    </button>
    
    <button v-else-if="color === 'secondary'" class="border-2 border-red-500 bg-red-500 p-2 m-2 w-36 rounded-sm text-gray-100 block hover:text-red-500 hover:bg-gray-100 transition duration-200">
        <slot />
    </button>
</template>

<script setup lang="ts">
    defineProps({
        color: {
            type: String,
            required: true
        }
    })
</script>