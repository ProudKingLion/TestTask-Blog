import { Body, Controller, Get, Param, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './articles.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { Article } from './articles.model';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { CommentsService } from 'src/comment/comment.service';
import { Comment } from '../comment/comment.model'
import { ArticleCategory } from 'src/article-category/article-category.model';

@Controller('articles')
export class ArticleController {
    constructor(private articleService: ArticlesService,
        private commentsService: CommentsService) { }

    @ApiOperation({ summary: 'Создать статью' })
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createArticle(@Body() dto: CreateArticleDto,
        @UploadedFile() image) {

        return this.articleService.create(dto, image)
    }

    @ApiOperation({ summary: 'Получить все статьи' })
    @ApiResponse({ status: 200, type: [Article] })
    @Get()
    getAll() {
        return this.articleService.getAllArticles();
    }

    @ApiOperation({ summary: 'Получить статьи некоторой категории' })
    @ApiResponse({ status: 200, type: Object })
    // ArticleCategory
    // @Roles("User")
    // @UseGuards(RolesGuard)
    @Get('/category/:id')
    getArticlesByCategory(@Param('id') id: number) {
        return this.articleService.getArticlesByCategoryWithName(id);
    }

    @ApiOperation({ summary: 'Получить статью по её id' })
    @ApiResponse({ status: 200, type: Article })
    // ArticleCategory
    // @Roles("User")
    // @UseGuards(RolesGuard)
    @Get('/:id')
    getArticlesById(@Param('id') id: number) {
        return this.articleService.getArticleByPk(id);
    }

    // @ApiOperation({ summary: 'Создание комментария' })
    // @ApiResponse({ status: 200, type: Comment })
    // // @UsePipes(ValidationPipe)
    // @Post(':id/comment')
    // create(@Body() userDto: CreateCommentDto) {
    //     return this.commentsService.createComment(userDto);
    // }

    // @ApiOperation({ summary: 'Получить комментарии к статье учитывая страницу и количество комментариев на странице' })
    // @ApiResponse({ status: 200, type: [Comment] })
    // @Roles("User")
    // @UseGuards(RolesGuard)
    // @Get(':id/comments')
    // getComments(@Param('id') id: number, @Query() query: { _limit: number, _page: number }) {
    //     return this.articleService.getComments(id, query._limit, query._page);
    // }

}
