export enum TopFoodCategory {
    FastFood,
    HealthyFood,
    Beverages,
}

export class TopFoodModel {
    firstLevelCategory: TopFoodCategory;
    secondLevelCategory: string;
    title: string;
    category: string;
    stock?: {
        count: number;
        m: number;
        ml: number;
        x: number;
    }
    advantages: {
        title: string;
        description: string;
    }[]
    seoText: string;
    tagsTitle: string
    tags: string[]
}
