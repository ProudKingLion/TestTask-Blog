import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
// import GameCardFool from "../pages/GameCardFool";
import NotFound from "../pages/NotFound";
// import SelectLobby from "../pages/SelectLobby";
import { privateRoutes, publicRoutes } from "../router";
import { observer } from "mobx-react-lite";
// import { AuthContext } from "./../context/index";
import { Context } from "..";

const AppRouter = () => {
    // const { isAuth, setIsAuth } = useContext(AuthContext);
    const { store } = useContext(Context);

    // console.log(store.isAuth);

    if (store.isLoading) {
        return <div>Загрузка...</div>;
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
