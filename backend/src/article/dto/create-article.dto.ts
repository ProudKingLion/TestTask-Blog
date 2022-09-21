import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { User } from 'src/users/users.model';

export class CreateArticleDto {
    @ApiProperty({ example: "Сравнение скорости языков программирования", description: "Заголовок статьи" })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 30, { message: "Не меньше 1 и не больше 30" })
    readonly title: string;

    @ApiProperty({
        example: "В этой статье мы определим насколько быстрым является тот или иной язык. ...",
        description: "Содержание статьи"
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 1000, { message: "Не меньше 1 и не больше 1000" })
    readonly content: string;

    @ApiProperty({
        example: "В этой статье мы определим...",
        description: "Превью текста в статье"
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 60, { message: "Не меньше 1 и не больше 60" })
    readonly previewText: string;

    @ApiProperty({
        example: "1",
        description: "Ключ пользователя"
    })
    // @IsNumber({}, { message: 'Должно быть цифрой' })
    @IsNotEmpty()
    readonly userId: number;

    @ApiProperty({
        example: "1",
        description: "Ключ категории"
    })
    // @NotNull({}, {'Не должно быть пустым'})
    // @IsNumber({}, { message: 'Должно быть цифрой' })
    @IsNotEmpty()
    // @IsString({ message: 'Должно быть строкой' })
    readonly categoryId: number;
}