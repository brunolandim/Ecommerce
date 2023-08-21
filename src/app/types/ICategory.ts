import { StaticImageData } from "next/image";

export interface ICategory {
    id: number;
    name: string;
    image: StaticImageData;
    width: number;
}