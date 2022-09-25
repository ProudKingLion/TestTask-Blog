import React, { FC, useEffect, useState } from "react";
import ArticleService from "../API/ArticleService";
import { useFetching } from "../hooks/useFetching";
import { IPreviewArticle } from "../models/IPreviewArticle";
import ArticleBlock from "./ArticleBlock";

interface IArticleListComponent {
    articles: IPreviewArticle[];
    isLoading: boolean;
}

const ArticleListComponent: FC<IArticleListComponent> = ({
    articles,
    isLoading,
}) => {
    // const [articles, setArticles] = useState<IArticles[]>([]);

    // const {
    //     fetching: fetchArticles,
    //     isLoading,
    //     error,
    // } = useFetching(async () => {
    //     const response = await ArticleService.getAll();

    //     setArticles(response.data);
    // });

    // useEffect(() => {
    //     fetchArticles();
    // }, []);

    // useEffect(() => {
    //     console.log(articles);
    // }, [articles]);

    return (
        // <section className="bg-white dark:bg-gray-900">
        //     <div className="container px-6 py-10 mx-auto">
        //         <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        //             From the blog
        //         </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {isLoading ? (
                "Loading"
            ) : articles.length !== 0 ? (
                articles.map((arlicle, index) => (
                    <ArticleBlock
                        key={index}
                        id={arlicle.id}
                        title={arlicle.title}
                        textPreview={arlicle.previewText}
                        imgLink={arlicle.image}
                    />
                ))
            ) : (
                <div>В этой категории нет статей.</div>
            )}
            {/* 
            {articles.map((arlicle, index) => (
                <ArticleBlock
                    key={index}
                    id={arlicle.id}
                    title={arlicle.title}
                    textPreview={arlicle.textPereview}
                    imgLink={arlicle.imgLink}
                />
            ))} */}
        </div>
        //     </div>
        // </section>
    );
};

export default ArticleListComponent;
