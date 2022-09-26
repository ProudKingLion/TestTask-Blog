import React from "react";
import MainWrapper from "../components/MainWrapper";

const Contacts = () => {
    return (
        <MainWrapper>
            <section className="dark:bg-gray-800">
                <div className="container shadow-lg dark:shadow-gray-900 max-w-7xl px-6 py-10 mx-auto min-h-[85vh]">
                    <div className="dark:text-gray-100">Контакты</div>
                </div>
            </section>
        </MainWrapper>
    );
};

export default Contacts;
