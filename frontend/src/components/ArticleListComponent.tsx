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
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {isLoading ? (
                <div className="dark:text-gray-100"> Загрузка...</div>
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
                <div className="dark:text-gray-100">
                    В этой категории нет статей.
                </div>
            )}
        </div>
    );
};

export default ArticleListComponent;
