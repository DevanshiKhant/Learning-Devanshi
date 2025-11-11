import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { role_key } from './roles.decorator';
import { role } from './roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requiredrole = this.reflector.getAllAndOverride<role[]>(
      role_key ,[
        context.getHandler(),
        context.getClass(),
      ]
    );

    if(!requiredrole) return true;
    const request = context.switchToHttp().getRequest<{headers :Record<string,string>}>();
    const userrole = request.headers['user-role'] as role;
    return requiredrole.includes(userrole);
  }
}
