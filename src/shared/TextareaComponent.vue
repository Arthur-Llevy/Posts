<template>  
    <textarea
        class="border-2 border-gray-600 h-36 w-full"
        cols="10"
        @input="$emit('value', value)"
        v-model="value"
    >
    </textarea>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let value = ref();
</script>