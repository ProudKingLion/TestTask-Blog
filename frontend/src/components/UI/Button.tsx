import React, { FC } from "react";

interface IButton {
    children?: any;
    classNameAdd?: string;
    link: string;
    props: any;
}

const Button: FC<IButton | any> = ({
    children,
    classNameAdd = "",
    link,
    ...props
}) => {
    const classNameFull =
        classNameAdd +
        " flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700";

    return (
        <div>
            <button {...props} className={classNameFull}>
                {children}
            </button>
        </div>
    );
};

export default Button;
