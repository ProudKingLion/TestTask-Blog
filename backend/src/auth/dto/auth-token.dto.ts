import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class AuthCheckDto {
    // @ApiProperty({ example: "Gabe101", description: "Уникальный логин пользователя" })
    // @IsString({ message: 'Должно быть строкой' })
    // @Length(2, 20, { message: "Не меньше 2 и не больше 20" })
    // readonly login: string;

    @ApiProperty({ example: "dfgdfgegrnn.344nltn34t3.fsdfre", description: "Токен" })
    @IsString({ message: 'Должно быть строкой' })
    readonly token: string;
}