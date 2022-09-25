import { JsxElement } from "typescript";
import Main from "../pages/Main";
import CategoryId from "../pages/CategoryId";
import ArticleId from "../pages/ArticleId";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import About from "../pages/About";
import Contacts from "../pages/Contacts";

interface Irotes {
    path: string,
    component: () => JSX.Element;
}

export const privateRoutes: Irotes[] = [
    { path: '/', component: Main },
    { path: '/category/:id', component: CategoryId },
    { path: '/article/:id', component: ArticleId },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
]

export const publicRoutes: Irotes[] = [
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/category/:id', component: CategoryId },
    { path: '/article/:id', component: ArticleId },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
] 