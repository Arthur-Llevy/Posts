<template>
    <div class="shadow w-72 h-80 rounded-sm flex flex-col justify-between bg-neutral-100">       
        <main>
            <p class="p-3">
                <slot />
            </p>
        </main>
        <footer class="flex justify-around">
           <ButtonComponentVue color="primary">Editar</ButtonComponentVue>
           <ButtonComponentVue @click="() => deletePost(id)" color="secondary">Excluir</ButtonComponentVue>
        </footer>
    </div>
</template>

<script lang="ts" setup>
    import ButtonComponentVue from '@/shared/ButtonComponent.vue';
    import { deletePostById } from '../../services/posts.api';

    let { id } = defineProps({
        id: {
            type: Number,
            required: true
        }
    });

    const deletePost = async (postId: number) => {
        try {
            let message: string = await deletePostById(postId);
            alert(message);
            window.location.reload()
        } catch (err) {
            return err
        }
    };

</script>
