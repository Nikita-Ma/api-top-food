import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductCharacteristicsDto {
  @IsString()
  name: string;
  @IsString()
  value: string;
}





export class CreateProductDto  {
  @IsString()
  images: string;
  @IsString()
  title: string;
  @IsNumber()
  price: number;
  @IsOptional()
  @IsNumber()
  oldPrice: number;
  @IsNumber()
  credit: number; // DELETE LINE
  @IsNumber()
  calcRating: number;
  @IsString()
  description: string;
  @IsString()
  disAdvantages: string;
  @IsArray()
  @IsString({each: true}) // el. arr = string
  categories: string[];
  @IsArray()
  @IsString({each: true}) // el. arr = string
  tags: string[];
  @IsArray()
  @ValidateNested()
  @Type(() => ProductCharacteristicsDto)
  characteristics: ProductCharacteristicsDto[];
}
