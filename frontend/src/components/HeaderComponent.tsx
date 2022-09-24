import React, { useContext, useEffect, useState } from "react";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LoginButton from "./LoginButton";
import Button from "./UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { ICategories } from "./../models/ICategories";
import { useFetching } from "../hooks/useFetching";
import ArticleCategoriesService from "../API/ArticleCategoriesService";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const HeaderComponent = () => {
    const navigate = useNavigate();
    const { store } = useContext(Context);

    const [articleCategories, setArticleCategories] = useState<ICategories[]>(
        []
    );

    const {
        fetching: fetchArticleCategories,
        isLoading,
        error,
    } = useFetching(async () => {
        const response = await ArticleCategoriesService.getAll();

        setArticleCategories(response.data);
    });

    useEffect(() => {
        fetchArticleCategories();
    }, []);

    return (
        <>
            <Popover className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 lg:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 lg:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>

                        <Popover.Group
                            as="nav"
                            className="hidden space-x-8 lg:flex"
                        >
                            <Link
                                key="Main"
                                to="/"
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                                <div className="">
                                    <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        Главная страница
                                    </p>
                                </div>
                            </Link>

                            <Popover className="relative pl-2">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open
                                                    ? "text-gray-900"
                                                    : "text-gray-500",
                                                "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            )}
                                        >
                                            <span>Категории</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open
                                                        ? "text-gray-600"
                                                        : "text-gray-400",
                                                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-50 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 ">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {articleCategories.map(
                                                            (item) => (
                                                                <Link
                                                                    key={
                                                                        item.title
                                                                    }
                                                                    to={`/category/${item.id}`}
                                                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            <a
                                key={"Contacts"}
                                href={"#"}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                                <div className="">
                                    <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        Контакты
                                    </p>
                                </div>
                            </a>

                            <a
                                key={"About"}
                                href={"#"}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                                <div className="">
                                    <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                                        О блоге
                                    </p>
                                </div>
                            </a>
                        </Popover.Group>
                        <div className="hidden items-center justify-end lg:flex md:flex-1 lg:w-0">
                            {store.isAuth ? (
                                <Button onClick={() => store.logout()}>
                                    Выйти
                                </Button>
                            ) : (
                                <>
                                    <Button onClick={() => navigate(`/login`)}>
                                        Войти
                                    </Button>
                                    <p className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                        {/* Нет акаунта?{" "} */}
                                        <Link to="/registration" className="">
                                            Загеристрироваться
                                        </Link>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-50"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {articleCategories.map((item) => (
                                            <Link
                                                key={item.title}
                                                to={`/category/${item.id}`}
                                                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                {store.isAuth ? (
                                    <Button onClick={() => store.logout()}>
                                        Выйти
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => navigate(`/login`)}
                                        >
                                            Войти
                                        </Button>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Нет акаунта?{" "}
                                            <Link
                                                to="/registration"
                                                className="text-indigo-600 hover:text-indigo-500"
                                            >
                                                Загеристрироваться
                                            </Link>
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
};

export default observer(HeaderComponent);
