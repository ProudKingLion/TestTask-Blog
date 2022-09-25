import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { User } from 'src/users/users.model';

export class CreateCommentDto {
    @ApiProperty({
        example: "Мне статья понравилась",
        description: "Содержание комментария"
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 200, { message: "Не меньше 1 и не больше 200" })
    readonly content: string;

    @ApiProperty({
        example: "1",
        description: "Ключ статьи"
    })
    @IsNotEmpty()
    readonly articleId: number;

    @ApiProperty({
        example: "1",
        description: "Ключ автора комментария(пользователя)"
    })
    @IsNotEmpty()
    readonly authorId: number;
}