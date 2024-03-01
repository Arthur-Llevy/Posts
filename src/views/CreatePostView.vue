<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center mt-4 gap-y-3">
        <div class="w-144 h-96 border-2 border-gray-600 p-3">
            <h2 class="font-medium text-2xl text-center">Create a post</h2>
            <main>
                <form @submit.prevent>
                    <div class="grid grid-cols-2 w-11/12 mx-auto h-auto items-center mt-2 p-2n">
                        <label>Conteúdo: </label>
                        <TextareaComponent @value="(value) => getContent(value)" />
                    </div>
                </form>
            </main>
            <ButtonComponent class="block mx-auto mt-10" color="primary" @click="() => create(content, user_id, for_id)">Criar e enviar</ButtonComponent>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import TextareaComponent from '@/shared/TextareaComponent.vue';
    import { createPost } from '../services/posts.api';
    import ButtonComponent from '@/shared/ButtonComponent.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    let user_id = ref<number>(0);
    let for_id = ref<number>(0);
    let content = ref<string>('');
    const router = useRouter()


    const create = async (Content: string, UserId: number, ForId: number) => {
        try {
            await createPost(Content);
            alert("Post criado com sucesso.");
            router.push("/");
        } catch (err) {
            alert(err);
        }
    };
    
    const getId = (value: number): void => {
        for_id.value = value;
    };
    
    const getContent = (value: string): void => {
        content.value = value;
    };
    
</script>