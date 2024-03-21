export default interface Card {
    id: string;
    parent: string;
    data: CardData[];
}

export interface CardData {
    imageUri: string;
    text: string;
    link: string;
}