import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IPost {
    id: number;
    title: string;
    textPreview: string;
    imgLink: string;
}

const ArticleBlock: FC<IPost> = ({ id, title, textPreview, imgLink }) => {
    const navigate = useNavigate();

    return (
        <div className="xl:flex">
            <img
                className="object-cover w-full h-56 rounded-lg xl:w-64"
                src={`/${imgLink}`}
                alt=""
            />

            <div className="flex flex-col justify-start py-6 xl:mx-6">
                <a
                    onClick={() => navigate(`/article/${id}`)}
                    className="text-xl pb-3  font-semibold text-gray-800 hover:underline dark:text-white "
                >
                    {title}
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                    {textPreview}
                </span>
            </div>
        </div>
    );
};

export default ArticleBlock;
