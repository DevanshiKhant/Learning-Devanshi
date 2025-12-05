import { SetMetadata } from "@nestjs/common";

export const role_key = 'role';
export const Roles = (...roles : String[]) => SetMetadata(role_key,roles);