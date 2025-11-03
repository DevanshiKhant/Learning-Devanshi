import { Injectable } from '@nestjs/common';
import { catdto } from './cat/dto/update.dto';

@Injectable()
export class AppService {
  

  private cats = [
    {
      id:1,
      color : "Black",
      eyes : "black"
    },
    {
      id : 2 ,
      color : "white",
      eyes : "blue"
    }
  ]

  getallcats(){
    return this.cats;
  }

  getcats(id:Number){
   
      const cat =  this.cats.find((cats) => cats.id === id)
      
      if(!cat)
        {
          throw new Error("id not found");
        }
        return cat;
  }

  update(cat : catdto)
  {
    const id =3
     this.cats.push({
      id,
      ...cat
     });

    return this.getcats(id);
  }

}
