export class ProductModel {
    images: string;
    title: string;
    price: number;
    oldPrice: number
    credit: number // DELETE LINE
    calcRating: number;
    description: string;
    disAdvantages: string;
    categories: string[];
    tags: string;
    characteristics: {
        [key: string] : string
    }
}
