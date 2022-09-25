import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticlesService } from 'src/articles/articles.service';
import { UsersService } from 'src/users/users.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.model'
import { where } from 'sequelize';
import { User } from 'src/users/users.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentRepository: typeof Comment,
        // private articleService: ArticlesService,
        private userService: UsersService,
        private jwtService: JwtService) { }

    async createComment(authorization, dto: CreateCommentDto) {
        try {
            if (!authorization) throw new UnauthorizedException({ message: 'Пользователь не авторизован' })

            const authHeader = authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' });
            }

            const user: User = this.jwtService.verify(token);

            if (user.id !== dto.authorId) throw new UnauthorizedException({ message: 'Неверный пользователь' });

            const comment = await this.commentRepository.create(dto);
            return comment;
        } catch (e) {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
        }
    }

    async getCommentsByPost(id: number, limit: number = 10, page: number = 1): Promise<any> {
        const commentsAndCount = await this.commentRepository.findAndCountAll({
            where: {
                articleId: id
            },
            limit: limit,
            offset: page * limit,
            include: { model: User, attributes: ['name'] },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        return commentsAndCount;

    }

}
