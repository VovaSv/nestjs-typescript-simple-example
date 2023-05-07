import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // GET /products --> []
  @Get()
  getProducts() {
    return 'All products';
  }
  // GET /products/:id --> {...}
  @Get(':id')
  getOneProduct() {
    return [];
  }
  // POST /products
  // PUT /products/:id --> {...}
  // DELETE /products/:id
}
