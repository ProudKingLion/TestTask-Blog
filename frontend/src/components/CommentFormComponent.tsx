import React, { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "..";
import CommentService from "../services/CommentService";

interface ICommentFormComponent {
    commentText: string;
    setCommentText: (text: string) => void;
    handleSubmitComment: (e: any) => void;
}

const CommentFormComponent: FC<ICommentFormComponent> = ({
    commentText,
    setCommentText,
    handleSubmitComment,
}) => {
    const { store } = useContext(Context);
    const handleChange = (event: any) => {
        setCommentText(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };

    return (
        <>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full bg-gray-50 px-4 pt-2 border-b-2 border-gray-200"
            >
                <div className="flex flex-wrap -mx-3 mb-3">
                    <h2 className=" pt-3 pb-2 text-gray-800 text-lg">
                        Комментарии
                    </h2>

                    {store.isAuth ? (
                        <>
                            <div className="w-full md:w-full pb-3 m b-2 mt-2">
                                <textarea
                                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                    name="body"
                                    placeholder="Написать комментарий..."
                                    onChange={handleChange}
                                    value={commentText}
                                    required
                                ></textarea>
                            </div>
                            <div className="w-full md:w-full flex items-start ">
                                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
                                <div className="-mr-1">
                                    <input
                                        type="submit"
                                        className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                                        value="Post Comment"
                                        onClick={handleSubmitComment}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <h2 className=" pt-3 pb-2 text-gray-400 font-normal text-lg">
                            Только пользователи могут оставлять комментарии.{" "}
                            <Link
                                to="/login"
                                className="text-blue-400 font-medium hover:text-gray-900"
                            >
                                Войдите
                            </Link>
                            , пожалуйста.
                        </h2>
                    )}
                </div>
            </form>
        </>
    );
};

export default CommentFormComponent;
