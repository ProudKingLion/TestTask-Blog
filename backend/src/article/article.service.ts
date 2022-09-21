import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { FilesService } from '../files/files.service';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article) private articleRepository: typeof Article,
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

    // async getArticleById(id: number) {
    //     const article = await this.articleRepository.findByPk(id);
    //     return article;
    // }

    async getComments(id: number, limit: number = -1, page: number = 1) {
        const article = await this.articleRepository.findByPk(id);

        const comments = article.comments;

        return comments;
    }

    // async getArticleByValue("")
}   
