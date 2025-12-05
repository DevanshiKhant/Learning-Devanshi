import { Controller, UseGuards,Get } from "@nestjs/common";
import { RoleGuard } from "./role.guard";
import { Roles } from "./roles.decorator";
import { role } from "./roles.enum";
import { AuthGuard } from "../authorization/auth.guard";

@Controller('user-role')
export class UserRolesController {
    @Get()
    @UseGuards(RoleGuard)   
    @Roles(role.Admin)
    getAdminData(){
        return { message: 'Only admin can access'}
    }


    @Get('/user')
    getUserData(){
        return { message: 'Anyone can access'}

    }

    @Get("/simple")
    @UseGuards(AuthGuard)
    getData(){
        return { message: 'simple Authorization'}

    }
}
