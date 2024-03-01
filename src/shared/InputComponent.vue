<template>
        <div class="relative w-full flex items-center justify-evenly">        
            <input 
                :type="_type"
                :placeholder="placeholder"
                class="w-96 border-2 border-gray-700 outline-none rounded-sm p-2 hover:outline-2 hover:outline-green-800"
                @input="$emit('value', value)"
                v-model="value"

            />        
            <span v-if="type === 'password'" class="left-90 text-2xl absolute top-2/4 -translate-y-2/4 left-2/4 cursor-pointer">
                <i v-if="_type === 'password'" @click="changePassWordVisibility" class="pi pi-eye-slash"></i>
                <i v-else @click="changePassWordVisibility" class="pi pi-eye"></i>
            </span>
        </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';    

    let value = ref();
    
    let { type } = defineProps({
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
    });

    let _type = ref<string>(type);

    const changePassWordVisibility = (): void => {
        _type.value = _type.value === "password" ? "text" : "password";
        console.log(_type.value)
    };
</script>

