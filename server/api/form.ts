import form from "@/data/form.json";
import type Metadata from "~/types/Metadata";

export default defineEventHandler((event): Metadata => {
    return form;
})