import { Controller , Get, Param, Post ,NotFoundException, Redirect,Body, Delete, UseFilters } from '@nestjs/common';
import {customexception } from './exception/custom_exception.filter';
import { AppService } from 'src/app.service';
import { catdto } from './dto/update.dto';

@UseFilters(customexception)
@Controller('cat')
export class CatController {
    constructor(private readonly appService: AppService) {}
    @Get()
    //@Redirect('http://localhost:3000/cat' , 301)
       getallcats() {
            return this.appService.getallcats();
        }        


    @Post(':id')
        cats(@Param('id') id: string){
            try {
                return this.appService.getcats(+id);   
            } catch (error) {
                    throw new NotFoundException(error.message);
            }
        }

    @Post()
    update(@Body() cat: catdto){
              return this.appService.update(cat);
        }

    @Delete(':id')
        remove(@Param('id')id: string){
            return this.appService.remove(+id);
        }
        
}


