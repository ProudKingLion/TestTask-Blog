import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context";
import Button from "./UI/Button";

const LoginComponent = () => {
    // const { isAuth, setIsAuth } = useContext(AuthContext);

    // const login = (event) => {
    //     event.preventDefault();
    //     setIsAuth(true);
    //     localStorage.setItem("auth", "true");
    // };

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-center text-5xl font-bold tracking-tight text-gray-900">
                            Блог
                        </h2>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Зарегистрироваться
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="login" className="sr-only">
                                    Login
                                </label>
                                <input
                                    id="login"
                                    name="login"
                                    type="login"
                                    autoComplete="login"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Логин"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Пароль"
                                />
                            </div>
                        </div>

                        <Button link="#">Зарегистрироваться</Button>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Уже есть аккаунт?{" "}
                            <Link
                                to="/login"
                                className="text-indigo-600 hover:text-indigo-500"
                            >
                                Войти
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
