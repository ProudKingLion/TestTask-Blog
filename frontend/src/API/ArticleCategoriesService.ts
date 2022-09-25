import axios from "axios";

export default class ArticleCategoryService {
    static async getAll() {
        const response = await axios.get('/article-category')
        return response;
    }
}
