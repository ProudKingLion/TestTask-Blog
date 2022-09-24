import React, { useEffect, useState } from "react";
import CommentComponent from "../components/CommentComponent";
import CommentFormComponent from "../components/CommentFormComponent";
import HeaderComponent from "../components/HeaderComponent";
import Button from "../components/UI/Button";
import { Link, useParams } from "react-router-dom";
import { IArticle } from "../models/IArticle";
import ArticleService from "../API/ArticleService";
import { useFetching } from "../hooks/useFetching";

const ArticleId = () => {
    const params = useParams();
    console.log(params);
    const [article, setArticle] = useState<IArticle>();

    const {
        fetching: fetchArticleById,
        isLoading,
        error,
    } = useFetching(async (id: number) => {
        const response = await ArticleService.getArticlesById(id);

        setArticle(response.data);
        console.log(article);
    });

    useEffect(() => {
        console.log(params);
        fetchArticleById(params.id);
    }, [params.id]);

    const date =
        article && new Date(article.createdAt).toDateString().split(" ");

    return (
        <>
            <HeaderComponent />
            <div className="relative flex">
                <div className="max-w-screen-xl mx-auto">
                    <div className=" flex flex-col items-center justify-center shadow-lg mb-4 max-w-7xl px-6">
                        <main className="mt-10">
                            <div
                                className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                                style={{ height: "24em" }}
                            >
                                <div
                                    className="absolute left-0 bottom-0 w-full h-full z-10"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                                    }}
                                ></div>
                                <img
                                    src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                                    className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                                />
                                <div className="p-4 absolute bottom-0 left-0 z-20">
                                    <Link
                                        to={`/category/${article?.articleCategory?.id}`}
                                        className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                                    >
                                        {article?.articleCategory.title}
                                    </Link>
                                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                        {article?.title}
                                    </h2>
                                    <div className="flex mt-3">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/97.jpg"
                                            className="h-10 w-10 rounded-full mr-2 object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-200 text-sm">
                                                {" "}
                                                {article?.author.name}{" "}
                                            </p>
                                            <p className="font-semibold text-gray-400 text-xs">
                                                {" "}
                                                {date?.length == 4 &&
                                                    `${date[2]} ${date[1]} ${date[3]}`}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                                {article?.content}
                            </div>
                        </main>

                        <div className="max-w-screen-md mx-auto">
                            {/* <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg"> */}
                            {/* <CommentFormComponent />
                            <CommentComponent /> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center shadow-lg mb-4 max-w-7xl px-6">
                        <CommentFormComponent />
                        <CommentComponent />
                        <CommentComponent />
                        <CommentComponent />
                        <CommentComponent />
                        <CommentComponent />
                    </div>
                    <Button classNameAdd="mb-4" link="#">
                        Посмотреть ещё 5
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ArticleId;

// inline-flex flex-col items-center
