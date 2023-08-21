import { StaticImageData } from "next/image";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    promotion_value: number;
    image: StaticImageData;
}