import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() { }

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  findAllProducts() {
    return 'Esta funcion regresa muchos productos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Esta funcion regresa un producto' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Esta funcion borra un producto' + id;
  }

  @Patch(":id")
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return 'Esta funcion actualiza un producto' + id;
  }

}
