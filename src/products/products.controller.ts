import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  // GET /products --> []
  @Get()
  getProducts(@Query('color') color: 'White' | 'Black') {
    return this.productService.getProducts(color);
  }
  // GET /products/:id --> {...}
  @Get(':id')
  getOneProduct(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.productService.getProduct(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  // POST /products
  @Post()
  @UseGuards(AuthGuard)
  createProduct(
    @Body(new ValidationPipe()) createProductDto: CreateProductDto,
  ) {
    return this.productService.createProduct(createProductDto);
  }
  // PUT /products/:id --> {...}
  @Put()
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(+id, updateProductDto);
  }
  // DELETE /products/:id
  @Delete(':id')
  removeProductProduct(@Param('id') id: string) {
    return this.productService.removeProduct(+id);
  }
}
