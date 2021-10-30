import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopFoodCategory {
  FastFood,
  HealthyFood,
  Beverages,
}


export class stockData {
  @prop()
  count: number;
  @prop()
  m: number;
  @prop()
  ml: number;
  @prop()
  x: number;
}

export class TopFoodAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}


export interface TopFoodModel extends Base {

}

export class TopFoodModel extends TimeStamps {
  @prop({ enum: TopFoodCategory })
  firstLevelCategory: TopFoodCategory;
  @prop()
  secondLevelCategory: string;
  @prop()
  title: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  category: string;
  @prop({ type: () => stockData})
  stock?: stockData;
  @prop({ type: () => [TopFoodAdvantage] })
  advantages: TopFoodAdvantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
