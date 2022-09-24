import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CheckTokenUserDto {
    readonly login: any;
    readonly id: any;
    readonly roles: any;
    readonly iat: any;
    readonly exp: any;
}