export default interface Metadata {
    id: string;
    title: string;
    fields: Fields[];
}

export interface Fields {
    id: string;
    type: string;
    name: string;
    dataUri?: string;
}