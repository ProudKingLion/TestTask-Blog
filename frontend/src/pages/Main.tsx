import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import ArticleListComponent from "../components/ArticleListComponent";
import ArticleService from "../API/ArticleService";
import { useFetching } from "../hooks/useFetching";
import { IArticle } from "../models/IArticle";
import { IPreviewArticle } from "../models/IPreviewArticle";
import MainWrapper from "../components/MainWrapper";

const Main = () => {
    const [articles, setArticles] = useState<IPreviewArticle[]>([]);

    const {
        fetching: fetchArticles,
        isLoading,
        error,
    } = useFetching(async () => {
        const response = await ArticleService.getAll();

        setArticles(response.data);
    });

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <MainWrapper>
            <section className="dark:bg-gray-900">
                <div className="container shadow-lg max-w-7xl px-6 py-10 mx-auto min-h-[85vh]">
                    {isLoading ? (
                        "Loading"
                    ) : (
                        <>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                Все статьи
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

export default Main;
