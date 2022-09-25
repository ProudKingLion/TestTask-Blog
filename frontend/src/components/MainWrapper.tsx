import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

const MainWrapper = (props: any) => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <HeaderComponent />
                {props.children}
                <FooterComponent />
            </div>
        </>
    );
};

export default MainWrapper;
