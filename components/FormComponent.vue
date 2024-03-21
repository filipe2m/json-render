<script setup lang="ts">
    interface Props {
        id?: string;
        name?: string;
    }
    const { id, name } = defineProps<Props>();
</script>

<template>
    <form 
        :id="id"
        :name="name"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
            <slot />
    </form>
</template>