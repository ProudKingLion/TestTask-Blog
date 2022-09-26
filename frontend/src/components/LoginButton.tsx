import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

interface ILoginButton {
    title: string;
    link: string;
}

const LoginButton: FC<ILoginButton> = ({ title, link }) => {
    return (
        <div>
            <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-400">
                Нет акаунта?{" "}
                <Link
                    to="/registration"
                    className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                    Загеристрироваться
                </Link>
            </p>
        </div>
    );
};

export default LoginButton;
