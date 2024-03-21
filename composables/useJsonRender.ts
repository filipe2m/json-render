import { h } from 'vue';
import type { Ref, VNode } from 'vue';
import FormComponent from "~/components/FormComponent.vue";
import InputComponent from '~/components/InputComponent.vue';
import CardComponent from '~/components/CardComponent.vue';
import type Metadata from "~/types/Metadata";
import type { Fields } from "~/types/Metadata";
import type Card from '~/types/Card';

export async function useJsonRender(metadata: Ref<Metadata | null>) {
    const childrenElements = await formatChildren(metadata.value?.fields);
    const parentElement = () => h(FormComponent, { id: metadata.value?.id, name: metadata.value?.title }, () => childrenElements);
    return parentElement;
}

async function formatChildren(fields: Fields[] | undefined): Promise<VNode[]> {
    const children: VNode[] = [];

    if (!fields) return children;

    for (const child of fields) {
        switch (child.type) {
            case 'text':
                children.push(h(InputComponent, { id: child.id, type: "text", name: child.name }));
                break;
            case 'password':
                children.push(h(InputComponent, { id: child.id, type: "password", name: child.name }));
                break;
            case 'int':
                children.push(h(InputComponent, { id: child.id, type: "number", name: child.name }));
                break;
            case 'card':
                if (child.dataUri) {
                    const card = await $fetch<Card>(child.dataUri);
                    if (card && card.data) {
                        for (const data of card.data) {
                            children.push(h(CardComponent, { imageUri: data.imageUri, text: data.text, link: data.link }));
                        }
                    }
                }
                break;
        }
    }

    return children;
}