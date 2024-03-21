import card from "@/data/card.json";
import type Card from "~/types/Card";

export default defineEventHandler((event): Card => {
    return card;
})