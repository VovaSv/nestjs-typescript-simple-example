import { MinLength, IsEnum } from 'class-validator';

export class CreateProductDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Black', 'White'], { message: 'Please select a correct color' })
  color: 'White' | 'Black';
}
