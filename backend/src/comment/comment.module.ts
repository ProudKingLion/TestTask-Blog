import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { CommentController } from './comment.controller';
import { CommentsService } from './comment.service';
import { Comment } from './comment.model';
import { ArticleModule } from 'src/article/article.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [CommentController],
    providers: [CommentsService],
    imports: [
        SequelizeModule.forFeature([Comment, User]),
        UsersModule,
        forwardRef(() => AuthModule),
        forwardRef(() => ArticleModule)
    ],
    exports: [
        CommentsService,
    ]
})
export class CommentModule { }
