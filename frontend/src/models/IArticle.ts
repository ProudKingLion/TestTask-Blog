export interface IArticle {
    id: number;
    title: string;
    // previewText: string;
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