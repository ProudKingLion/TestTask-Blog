import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CategoryCreationAttrs {
    title: string;
}

@Table({ tableName: 'article_category', createdAt: false, updatedAt: false })
export class ArticleCategory extends Model<ArticleCategory, CategoryCreationAttrs> {
    @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "Программирование", description: "Категория статей" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    // @HasMany(() => Article)
    // : Role[];
} 