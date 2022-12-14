import axios from "axios";

export default class ArticleService {
    static async getAll() {
        const response = await axios.get('/articles')
        return response;
    }

    static async getArticlesById(id: number) {
        const response = await axios.get(`/articles/${id}`)
        return response;
    }

    static async getArticlesByCategory(id: number) {
        const response = await axios.get(`/articles/category/${id}`)
        return response;
    }
}
