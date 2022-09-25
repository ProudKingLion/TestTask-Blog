import { forwardRef, Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleController } from './articles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './articles.model';
import { User } from 'src/users/users.model';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';
import { CommentModule } from 'src/comment/comment.module';
import { ArticleCategoryModule } from 'src/article-category/article-category.module';
import { ArticleCategory } from 'src/article-category/article-category.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
    providers: [ArticlesService],
    controllers: [ArticleController],
    imports: [
        SequelizeModule.forFeature([User, Article]),
        ArticleCategoryModule,
        FilesModule,
        forwardRef(() => CommentModule),
        forwardRef(() => AuthModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        }),
    ],
    exports: [
        ArticlesService,
    ]
})
export class ArticleModule { }
