import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';


@ApiTags('Комментарии')
@Controller('comments')
export class CommentController {
    constructor(private commentsService: CommentsService) { }

    // @ApiOperation({ summary: 'Создание комментария' })
    // @ApiResponse({ status: 200, type: Comment })
    // // @UsePipes(ValidationPipe)
    // @Post()
    // create(@Body() userDto: CreateCommentDto) {
    //     return this.commentsService.createComment(userDto);
    // }

    // @ApiOperation({ summary: 'Получить комментарии к статье учитывая страницу и количество комментариев на странице' })
    // @ApiResponse({ status: 200, type: [Comment] })
    // @Roles("User")
    // @UseGuards(RolesGuard)
    // @Get(':id')
    // getComments(@Param('id') id: number, @Query() query: { _limit: number, _page: number }) {
    //     return this.commentsService.getCommentsByPost(id, query._limit, query._page);
    // }

}
