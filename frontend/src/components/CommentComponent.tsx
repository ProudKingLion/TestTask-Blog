import React, { FC } from "react";
import { IComment } from "../models/IComment";

const CommentComponent: FC<IComment> = ({ createdAt, content, author }) => {
    const date = new Date(createdAt).toDateString().split(" ");

    return (
        <>
            <div
                className="flex justify-center relative"
                style={{ maxWidth: "fit-content" }}
            >
                <div className="relative grid grid-cols-1 gap-4 mb-2 rounded-lg bg-gray-50 py-3">
                    <div className="relative flex">
                        <div className="flex flex-col w-full">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                                {author.name}
                            </p>
                            <p className="text-gray-400 text-sm mb-2">
                                {date?.length == 4 &&
                                    `${date[2]} ${date[1]} ${date[3]}`}
                            </p>
                        </div>
                    </div>
                    <p className="-mt-4 text-gray-500">{content}</p>
                    <a className="text-blue-400">Ответить</a>
                </div>
            </div>
        </>
    );
};

export default CommentComponent;
