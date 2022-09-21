import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { ArticleCategory } from '../article-category/article-category.model';
import { Comment } from './../comment/comment.model';

interface ArticleCreationAttrs {
    title: string;
    content: string;
    password: string;
    previewText: string;
    userId: number;
    image: string;
}

@Table({ tableName: 'article' })
export class Article extends Model<Article, ArticleCreationAttrs> {
    @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "Сравнение скорости языков программирования", description: "Заголовок статьи" })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    title: string;

    @ApiProperty({
        example: "В этой статье мы определим насколько быстрым является тот или иной язык. ...",
        description: "Содержание статьи"
    })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    content: string;

    @ApiProperty({
        example: "В этой статье мы определим...",
        description: "Превью текста в статье"
    })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    previewText: string;

    @ApiProperty({
        example: "",
        description: "Изображение к статье"
    })
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

    @ApiProperty({
        example: "1",
        description: "Ключ пользователя"
    })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @ApiProperty({
        example: "Вася",
        description: "Автор статьи"
    })
    @BelongsTo(() => User)
    author: User;

    @ApiProperty({
        example: "1",
        description: "Ключ категории"
    })
    @ForeignKey(() => ArticleCategory)
    @Column({ type: DataType.INTEGER, allowNull: false })
    categoryId: number;

    @ApiProperty({
        example: "Про программирование",
        description: "Категория статьи"
    })
    @BelongsTo(() => ArticleCategory)
    articleCategory: ArticleCategory;

    @HasMany(() => Comment)
    comments: Comment[];

    // @ApiProperty({
    //     example: "Программирование",
    //     description: "Категория статьи"
    // })
    // @BelongsTo(() => )
    // category: ;


} 