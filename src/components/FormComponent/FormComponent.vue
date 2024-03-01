<template>
    <form @submit.prevent class="border-gray-600 border-2 w-96 h-auto p-2">
        <FormInputComponent type="text" placeholder="Your name">Your name:</FormInputComponent>
        <textarea></textarea>
        <button type="submit">Save</button>
    </form>
</template>

<script setup lang="ts">

    import FormInputComponent from '../../shared/InputComponent.vue';

</script>