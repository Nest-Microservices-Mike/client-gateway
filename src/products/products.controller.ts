import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy
  ) { }

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productClient.send({ cmd: 'find_all_products' }, paginationDto);
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
