import React from "react";

const FooterComponent = () => {
    return (
        <>
            <footer className="relative bg-gray-50 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="w-full bg-gray-50 px-4 pt-8 border-t-2 border-gray-200">
                        <div className="flex ">
                            <div className="w-full md:w-1/3 lg:w-1/4">
                                <h6 className="font-semibold text-gray-700 mb-4">
                                    Company
                                </h6>
                                <ul>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            Team
                                        </p>
                                    </li>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            About us
                                        </p>
                                    </li>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            Press
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-1/4">
                                <h6 className="font-semibold text-gray-700 mb-4">
                                    Content
                                </h6>
                                <ul>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            Blog
                                        </p>
                                    </li>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            Privacy Policy
                                        </p>
                                    </li>
                                    <li>
                                        <p className="block text-gray-600 py-2">
                                            Terms & Conditions
                                        </p>
                                    </li>
                                    <li>
                                        <p className="block text-gray-600 py-2"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;
