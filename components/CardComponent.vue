<script setup lang="ts">
    interface Props {
        imageUri?: string;
        text?: string;
        link?: string;
    }
    const { imageUri, text, link } = defineProps<Props>();
</script>

<template>
    <a :href="link" target="_blank">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mb-2">
            <img class="w-full h-48 object-contain" :src="imageUri" :alt="text">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    {{ text }}
                </div>
            </div>
        </div>
    </a>
</template>