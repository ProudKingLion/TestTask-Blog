export interface IArticle {
    id: number;
    title: string;
    content: string;
    image: string;
    author: {
        name: string;
        login: string;
    };
    createdAt: string;
    articleCategory: {
        id: number;
        title: string;
    }
}