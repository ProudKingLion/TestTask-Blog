import React, { useContext } from "react";
import LoginComponent from "../components/LoginComponent";
import RegistrationComponent from "../components/RegistrationComponent";

const Login = () => {
    return (
        <div className="h-screen pb-20 content-center bg-gray-50 dark:bg-gray-800">
            <RegistrationComponent />
        </div>
    );
};

export default Login;
