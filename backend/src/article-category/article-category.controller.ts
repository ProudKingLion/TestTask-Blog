import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { roles } from 'src/const/roles-const';
import { ArticleCategory } from './article-category.model';
import { ArticleCategoryService } from './article-category.service';
import { ArticleCategoryDto } from './dto/create-acticle-category.dto';

@ApiTags('Категории статей')
@Controller('article-category')
export class ArticleCategoryController {
    constructor(private articleCategoryService: ArticleCategoryService) { }

    @ApiOperation({ summary: 'Создание категории статьи' })
    @ApiResponse({ status: 200, type: ArticleCategory })
    @Roles(roles.ADMIN)
    @UseGuards(RolesGuard)
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() articleCategoryDto: ArticleCategoryDto) {
        return this.articleCategoryService.createCategory(articleCategoryDto);
    }

    @ApiOperation({ summary: 'Получение всех категорий' })
    @ApiResponse({ status: 200, type: [ArticleCategory] })
    @Get()
    getAll() {
        return this.articleCategoryService.getAllCategories();
    }
}
