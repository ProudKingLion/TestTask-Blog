import { JsxElement } from "typescript";
import Main from "../pages/Main";
import Categories from "../pages/Categories";
import ArticleId from "../pages/ArticleId";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

interface Irotes {
    path: string,
    component: () => JSX.Element;
}

export const privateRoutes: Irotes[] = [
    { path: '/', component: Main },
    { path: '/categories', component: Categories },
    { path: '/article/:id', component: ArticleId },

]

export const publicRoutes: Irotes[] = [
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/categories', component: Categories },
    { path: '/article/:id', component: ArticleId },
] 