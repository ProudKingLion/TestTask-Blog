import React from "react";

const CommentFormComponent = () => {
    return (
        <>
            {/* <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg"> */}
            <form className="w-full bg-white rounded-lg px-4 pt-2 border-b-2 border-gray-100">
                <div className="flex flex-wrap -mx-3 mb-3">
                    <h2 className=" pt-3 pb-2 text-gray-800 text-lg">
                        Комментарии
                    </h2>
                    <div className="w-full md:w-full pb-3 m b-2 mt-2">
                        <textarea
                            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            name="body"
                            placeholder="Написать комментарий..."
                            required
                        ></textarea>
                    </div>
                    <div className="w-full md:w-full flex items-start ">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            {/* <svg
                                fill="none"
                                className="w-5 h-5 text-gray-600 mr-1"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="text-xs md:text-sm pt-px">
                                Some HTML is okay.
                            </p> */}
                        </div>
                        <div className="-mr-1">
                            <input
                                type="submit"
                                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                                value="Post Comment"
                            />
                        </div>
                    </div>
                </div>
            </form>
            {/* </div> */}
        </>
    );
};

export default CommentFormComponent;
