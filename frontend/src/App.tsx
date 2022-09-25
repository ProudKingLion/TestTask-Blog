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
        if (localStorage.getItem("token")) {
            store.refresh();
        }
    }, []);

    return <AppRouter />;
}

export default observer(App);
