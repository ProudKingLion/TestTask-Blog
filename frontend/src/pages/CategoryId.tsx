import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../API/ArticleService";
import ArticleListComponent from "../components/ArticleListComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useFetching } from "../hooks/useFetching";
import { IArticle } from "../models/IArticle";
import { IPreviewArticle } from "../models/IPreviewArticle";

const CategoryId = () => {
    const params = useParams();
    console.log(params);
    const [articles, setArticles] = useState<IPreviewArticle[]>([]);
    const [categoryTitle, setCategoryTitle] = useState<string>("");

    const {
        fetching: fetchArticlesByCategory,
        isLoading,
        error,
    } = useFetching(async (id: number) => {
        const response = await ArticleService.getArticlesByCategory(id);

        setArticles(response.data.articles);
        setCategoryTitle(response.data.category.title);
        console.log(articles);
    });

    useEffect(() => {
        console.log(params);
        fetchArticlesByCategory(params.id);
    }, [params.id]);

    return (
        <>
            <HeaderComponent />
            {isLoading ? (
                "Loading"
            ) : (
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                            {categoryTitle}
                        </h1>
                        <ArticleListComponent
                            articles={articles}
                            isLoading={isLoading}
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default CategoryId;
