import axios from "axios";

export default class ArticleCategoryService {
    static async getAll() {
        const response = await axios.get('/article-category')
        return response;
    }

    //     static async getById(id: number) {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         return response;
    //     }

    //     static async getCommentsByArticleId(id: number) {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //         return response;
    //     }

    // static async getArticlesByCategory(id: number) {
    //     const response = await axios.get(`/articles/${id}`)
    //     return response;
    // }
}
