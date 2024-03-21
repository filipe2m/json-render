<script setup lang="ts">
    import type Metadata from '~/types/Metadata';
    const { data: metadata } = await useFetch<Metadata>('https://masterlink-mock-api.mwe.pt/MlkApi/bpm_metadata/1');
    const renderedContent = await useJsonRender(metadata);
</script>

<template>
    <div class="w-full max-w-lg" ref="jsonRender">
        <renderedContent />
    </div>
</template>