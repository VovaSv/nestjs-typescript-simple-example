import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  // GET /products --> []
  @Get()
  getProducts(@Query('type') type: string) {
    return [{ type }];
  }
  // GET /products/:id --> {...}
  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return { id };
  }
  // POST /products
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return {
      name: createProductDto.name,
    };
  }
  // PUT /products/:id --> {...}
  @Put()
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return {
      id,
    };
  }
  // DELETE /products/:id
  @Delete(':id')
  removeProductProduct(@Param('id') id: string) {
    return {
      id,
    };
  }
}
