import React, { FC } from "react";

interface IAuthInput {
    title: string;
    placeholder: string;
    value: string;
    change: (e: any) => void;
    borderSide?: "top" | "bottom";
}

const AuthInput: FC<IAuthInput> = ({
    title,
    placeholder,
    value,
    borderSide = "",
    change,
}) => {
    let borderClass = "";
    if (borderSide == "top") borderClass = "rounded-t-md";
    if (borderSide == "bottom") borderClass = "rounded-b-md";

    return (
        <>
            <label htmlFor={title} className="sr-only">
                {title}
            </label>
            <input
                id={title}
                name={title}
                type={title}
                autoComplete="on"
                onChange={change}
                value={value}
                required
                className={`relative block w-full appearance-none rounded-none ${borderClass} border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-900/30 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                placeholder={placeholder}
            />
        </>
    );
};

export default AuthInput;
