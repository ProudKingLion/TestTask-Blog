import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class ArticleCategoryDto {
    @ApiProperty({ example: "Про программирование", description: "Категория статьи" })
    @IsString({ message: 'Должно быть строкой' })
    @Length(2, 40, { message: "Не меньше 2 и не больше 40" })
    readonly title: string;
}