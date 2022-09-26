import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import { privateRoutes, publicRoutes } from "../router";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const AppRouter = () => {
    const { store } = useContext(Context);

    if (store.isLoading) {
        return <div className="dark:text-gray-100">Загрузка...</div>;
    }

    return store.isAuth ? (
        <Routes>
            {privateRoutes.map((rote) => {
                return (
                    <Route
                        key={rote.path}
                        path={rote.path}
                        element={<rote.component />}
                    />
                );
            })}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((rote) => {
                return (
                    <Route
                        key={rote.path}
                        path={rote.path}
                        element={<rote.component />}
                    />
                );
            })}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default observer(AppRouter);
