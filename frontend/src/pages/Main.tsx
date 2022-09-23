import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import ArticleListComponent from "../components/ArticleListComponent";
import ArticleService from "../API/ArticleService";
import { useFetching } from "../hooks/useFetching";

const Main = () => {
    const [articles, setArticles] = useState([]);

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

    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return (
        <>
            <HeaderComponent />

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Все статьи
                    </h1>
                    <ArticleListComponent />
                </div>
            </section>
        </>
    );
};

export default Main;
