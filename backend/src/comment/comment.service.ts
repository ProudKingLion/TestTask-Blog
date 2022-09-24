import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticlesService } from 'src/articles/articles.service';
import { UsersService } from 'src/users/users.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.model'

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentRepository: typeof Comment,
        private articleService: ArticlesService,
        private userService: UsersService) { }

    async createComment(dto: CreateCommentDto) {
        const comment = await this.commentRepository.create(dto);
        return comment;
    }

    // async getAllUsers() {
    //     const users = await this.userRepository.findAll({ include: { all: true } });
    //     return users;
    // }

    // async getCommentsByPost(id: number, limit: number, page: number): Promise<Comment[]> {
    //     const article = await this.articleService.getArticleById(id);
    //     const comments = await article.
    //     return comments;
    // }

    // async addRole(dto: AddRoleDto) {
    //     const user = await this.userRepository.findByPk(dto.userId);
    //     const role = await this.roleService.getRoleByValue(dto.value);

    //     if (role && user) {
    //         await user.$add('role', role.id);
    //         return dto;
    //     }

    //     throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    // }
}
