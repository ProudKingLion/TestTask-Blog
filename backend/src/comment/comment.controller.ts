import { Body, Controller, ExecutionContext, Get, Param, Post, Query, Request, Headers, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { roles } from 'src/const/roles-const';


@ApiTags('Комментарии')
@Controller('comments')
export class CommentController {
    constructor(private commentsService: CommentsService) { }

    @ApiOperation({ summary: 'Создание комментария' })
    @ApiResponse({ status: 200, type: Comment })
    @Roles(roles.USER, roles.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() createCommentDto: CreateCommentDto,
        @Headers('authorization') authorization) {
        return this.commentsService.createComment(authorization, createCommentDto);
    }

    @ApiOperation({ summary: 'Получить комментарии к статье учитывая страницу и количество комментариев на странице' })
    @ApiResponse({ status: 200, type: [Comment] })
    @Get(':id')
    getComments(@Param('id') id: number,
        @Query() query: {
            _limit?: number, _page?: number
        }
    ) {
        return this.commentsService.getCommentsByPost(id, query._limit, query._page);
    }

}
