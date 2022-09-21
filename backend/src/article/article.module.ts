import { forwardRef, Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticleController } from './article.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './article.model';
import { User } from 'src/users/users.model';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
    providers: [ArticlesService],
    controllers: [ArticleController],
    imports: [
        SequelizeModule.forFeature([User, Article]),
        FilesModule,
        forwardRef(() => CommentModule),
        forwardRef(() => AuthModule),
    ],
    exports: [
        ArticlesService,
    ]
})
export class ArticleModule { }
