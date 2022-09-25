import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "..";
import { IInputsRegistration } from "../models/IInputs";
import AuthInput from "./AuthInput";
import Button from "./UI/Button";

const LoginComponent = () => {
    const [inputs, setInputs] = useState({} as IInputsRegistration);
    const { store } = useContext(Context);

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: any) => {
        console.log(inputs);
        event.preventDefault();
    };

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
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <AuthInput
                                title="login"
                                placeholder="Логин"
                                value={inputs.login || ""}
                                change={handleChange}
                                borderSide="top"
                            />
                            <AuthInput
                                title="name"
                                placeholder="Имя"
                                value={inputs.name || ""}
                                change={handleChange}
                            />
                            <AuthInput
                                title="password"
                                placeholder="Пароль"
                                value={inputs.password || ""}
                                change={handleChange}
                                borderSide="bottom"
                            />
                        </div>

                        <Button
                            onClick={() =>
                                store.registration(
                                    inputs.name,
                                    inputs.login,
                                    inputs.password
                                )
                            }
                        >
                            Зарегистрироваться
                        </Button>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Уже есть аккаунт?{" "}
                            <Link
                                to="/login"
                                className="text-indigo-600 hover:text-indigo-500"
                            >
                                Войти
                            </Link>
                        </p>
                        <p className="!mt-3 text-center text-base font-medium text-gray-500">
                            <Link to="/" className="hover:text-indigo-500">
                                На главную
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
