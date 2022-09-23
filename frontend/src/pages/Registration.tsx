import React, { useContext } from "react";
import LoginComponent from "../components/LoginComponent";
import RegistrationComponent from "../components/RegistrationComponent";
// import MyInput from "../components/UI/input/MyInput";
// import MyButton from "../components/UI/button/MyButton";
// import { AuthContext } from "../context";
// import { LockClosedIcon } from "@heroicons/react/20/solid";

const Login = () => {
    // const { isAuth, setIsAuth } = useContext(AuthContext);

    // const login = (event) => {
    //     event.preventDefault();
    //     setIsAuth(true);
    //     localStorage.setItem("auth", "true");
    // };

    return (
        <div className="h-screen pb-20 content-center bg-gray-50">
            <RegistrationComponent />
        </div>
    );
};

export default Login;
