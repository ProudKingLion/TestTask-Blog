import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class AuthCheckDto {
    @ApiProperty({ example: "dfgdfgegrnn.344nltn34t3.fsdfre", description: "Токен" })
    @IsString({ message: 'Должно быть строкой' })
    readonly token: string;
}