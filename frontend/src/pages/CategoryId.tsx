import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../API/ArticleService";
import ArticleListComponent from "../components/ArticleListComponent";
import HeaderComponent from "../components/HeaderComponent";
import MainWrapper from "../components/MainWrapper";
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
        <MainWrapper>
            <section className="dark:bg-gray-900">
                <div className="container shadow-lg max-w-7xl min-h-[85vh] px-6 py-10 mx-auto">
                    {isLoading ? (
                        "Loading"
                    ) : (
                        <>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                {categoryTitle}
                            </h1>
                            <ArticleListComponent
                                articles={articles}
                                isLoading={isLoading}
                            />
                        </>
                    )}
                </div>
            </section>
        </MainWrapper>
    );
};

export default CategoryId;
