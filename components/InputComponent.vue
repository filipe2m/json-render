<script setup lang="ts">
    interface Props {
        id?: string;
        type?: string;
        name?: string;
    }
    const { id, type, name } = defineProps<Props>();
</script>

<template>
    <div class="mb-4">
        <input
            :id="id" 
            :type="type" 
            :placeholder="name" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>
</template>