import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './articles.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { FilesService } from '../files/files.service';
import { ArticleCategory } from './../article-category/article-category.model';
import { ArticleCategoryService } from './../article-category/article-category.service';
import { User } from 'src/users/users.model';
// import { Article } from './../article/article.model';
import { Comment } from './../comment/comment.model';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article) private articleRepository: typeof Article,
        private articleCategoryRepository: ArticleCategoryService,
        private fileService: FilesService) { }

    async create(dto: CreateArticleDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const article = await this.articleRepository.create({ ...dto, image: fileName });

        return article;
    }

    async getAllArticles() {
        const users = await this.articleRepository.findAll();
        return users;
    }

    async getArticlesByCategory(id: number) {
        const articles = await this.articleRepository.findAll({ where: { categoryId: id } })

        return articles;
    }

    async getArticleByPk(id: number) {
        const category = await this.articleRepository.findByPk(id, {
            include: [
                {
                    model: User,
                    attributes: ['name', 'login'],
                },
                {
                    model: ArticleCategory,
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['name'],
                        }
                    ]
                }
            ]
        })

        return category;
    }

    async getArticlesByCategoryWithName(id: number) {
        const articles = await this.getArticlesByCategory(id);
        const category = await this.articleCategoryRepository.getCategoryByPk(id);

        return { category: category, articles: articles };
    }


    async getComments(id: number, limit: number = -1, page: number = 1) {
        const article = await this.articleRepository.findByPk(id);

        const comments = article.comments;

        return comments;
    }

}   
