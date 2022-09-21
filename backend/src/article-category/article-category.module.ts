import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { ArticleCategoryController } from './article-category.controller';
import { ArticleCategory } from './article-category.model';
import { ArticleCategoryService } from './article-category.service';

@Module({
    controllers: [ArticleCategoryController],
    providers: [ArticleCategoryService],
    imports: [
        SequelizeModule.forFeature([ArticleCategory]),
        forwardRef(() => AuthModule),
    ],
    exports: [
        ArticleCategoryService,
    ]
})
export class ArticleCategoryModule { }
