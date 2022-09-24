import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
// import { AuthContext } from "./context";

function App() {
    const { store } = useContext(Context);

    useEffect(() => {
        // const token = localStorage.getItem("token");
        // console.log("TOKEN");
        // console.log(token);
        if (localStorage.getItem("token")) {
            // console.log("TOKEN???");
            // console.log(store.user.login);
            store.refresh();
        }
    }, []);
    // const [isAuth, setIsAuth] = useState(false);

    // if (localStorage.getItem("auth")) {
    //     setIsAuth(true);
    // }

    return (
        // <AuthContext.Provider
        //     value={{
        //         isAuth,
        //         setIsAuth,
        //     }}
        // >
        <AppRouter />
        // </AuthContext.Provider>
    );
}

export default observer(App);
