import { Controller, Post} from '@nestjs/common';

@Controller('products')
//what is an @control decorator?
export class ProductsController{
    @Post()
    addProduct():any{
        
    }
}