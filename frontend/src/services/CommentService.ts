import $api from "../http";
import { AxiosResponse } from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { IComment } from './../models/IComment';

export default class CommentService {
    static fetchComments(id: number): Promise<AxiosResponse<IComment[]>> {
        return $api.get<IComment[]>(`/article/${id}/comments`)
    }
}

