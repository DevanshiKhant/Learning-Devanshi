import { Controller , Get, Param, Post ,NotFoundException, Redirect, Put, Body } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { AppService } from 'src/app.service';
import { catdto } from './dto/update.dto';

@Controller('cat')
export class CatController {
    constructor(private readonly appService: AppService) {}
    @Get()
    //@Redirect('http://localhost:5000/cat' , 301)
       getallcats(){
            return this.appService.getallcats();
        }        

    @Get(':id')
            getcats(@Param('id') id: string){
            try {
                return this.appService.getcats(+id);   
            } catch (error) {
                    throw new NotFoundException(error.message);
            }

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
        
}
