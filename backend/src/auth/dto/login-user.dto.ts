import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class LoinUserDto {
    @ApiProperty({ example: "Gabe101", description: "Уникальный логин пользователя" })
    @IsString({ message: 'Должно быть строкой' })
    @Length(2, 20, { message: "Не меньше 2 и не больше 20" })
    readonly login: string;

    @ApiProperty({ example: "qwerty", description: "Пароль" })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 32, { message: "Не меньше 4 и не больше 32" })
    readonly password: string;
}