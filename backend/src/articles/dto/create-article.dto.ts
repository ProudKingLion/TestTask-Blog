import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { User } from 'src/users/users.model';

export class CreateArticleDto {
    @ApiProperty({ example: "Сравнение скорости языков программирования", description: "Заголовок статьи" })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 60, { message: "Не меньше 1 и не больше 60" })
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({
        example: "В этой статье мы определим насколько быстрым является тот или иной язык. ...",
        description: "Содержание статьи"
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 3000, { message: "Не меньше 1 и не больше 5000" })
    @IsNotEmpty()
    readonly content: string;

    @ApiProperty({
        example: "В этой статье мы определим...",
        description: "Превью текста в статье"
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 300, { message: "Не меньше 1 и не больше 200" })
    @IsNotEmpty()
    readonly previewText: string;

    @ApiProperty({
        example: "1",
        description: "Ключ пользователя"
    })
    @IsNotEmpty()
    readonly userId: number;

    @ApiProperty({
        example: "1",
        description: "Ключ категории"
    })
    @IsNotEmpty()
    readonly categoryId: number;
}