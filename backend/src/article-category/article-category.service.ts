import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticleCategory } from './article-category.model';
import { ArticleCategoryDto } from './dto/create-acticle-category.dto';

@Injectable()
export class ArticleCategoryService {
    constructor(@InjectModel(ArticleCategory) private articleCategoryRepository: typeof ArticleCategory) { }

    async createCategory(dto: ArticleCategoryDto) {
        const category = await this.articleCategoryRepository.create(dto);
        return category;
    }

    async getAllCategories() {
        const categories = await this.articleCategoryRepository.findAll();
        return categories;
    }

    async getCategoryByPk(id: number) {
        const category = await this.articleCategoryRepository.findByPk(id);
        return category;
    }
}
