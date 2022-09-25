import $api from "../http";
import { AxiosResponse } from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { IComment } from './../models/IComment';
import { ICommentsAndCount } from "../models/ICommentsAndCount";

export default class CommentService {
    static fetchComments(id: number, limit: number, page: number): Promise<AxiosResponse<ICommentsAndCount>> {
        return $api.get<ICommentsAndCount>(`/comments/${id}?_limit=${limit}&_page=${page}`)
    }

    static sendComment(content: string, articleId: number, authorId: number): Promise<AxiosResponse<IComment>> {
        return $api.post<IComment>(`/comments`, { content, articleId, authorId })
    }
}

