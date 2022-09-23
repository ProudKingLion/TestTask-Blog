import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter";
// import { AuthContext } from "./context";

function App() {
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

export default App;
