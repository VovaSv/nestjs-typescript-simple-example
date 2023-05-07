import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [
    { id: 0, name: 'productA', color: 'Black' },
    { id: 1, name: 'productB', color: 'White' },
  ];

  getProducts(color?: 'White' | 'Black') {
    if (color) {
      return this.products.filter((product) => product.color === color);
    }

    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  createProduct(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: Date.now(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...updateProductDto };
      }
      return product;
    });
    return this.getProduct(id);
  }

  removeProduct(id: number) {
    const toBeRemoved = this.getProduct(id);
    this.products = this.products.filter((product) => product.id !== id);
    return toBeRemoved;
  }
}
