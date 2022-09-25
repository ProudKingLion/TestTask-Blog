
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { ArticleCategoryModule } from './article-category/article-category.module';
import { ArticleModule } from './articles/articles.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { Article } from './articles/articles.model';
import { ArticleCategory } from './article-category/article-category.model';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/comment.model';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_DB_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB_NAME,
            models: [User, Role, UserRoles, Article, ArticleCategory, Comment],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        ArticleCategoryModule,
        ArticleModule,
        FilesModule,
        CommentModule,
    ]
})
export class AppModule { }