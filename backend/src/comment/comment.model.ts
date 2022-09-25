import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Article } from 'src/articles/articles.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';

interface CommentCreationAttrs {
    content: string;
    articleId: number;
    authorId: number;
}

@Table({ tableName: 'comments', updatedAt: false })
export class Comment extends Model<Comment, CommentCreationAttrs> {
    @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "Отличная статья", description: "Содержание комментария" })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    content: string;

    @ApiProperty({
        example: "1",
        description: "Ключ статьи"
    })
    @ForeignKey(() => Article)
    @Column({ type: DataType.INTEGER })
    articleId: number;

    @ApiProperty({
        example: "Статья про скорость языков",
        description: "Статья",
        type: () => Article
    })
    @BelongsTo(() => Article)
    article: Article;

    @ApiProperty({
        example: "1",
        description: "Ключ автора"
    })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    authorId: number;

    @ApiProperty({
        example: "Вася",
        description: "Автор статьи"
    })
    @BelongsTo(() => User)
    author: User;
} 