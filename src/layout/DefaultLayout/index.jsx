import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "../../components/Navigation";

function DefaultLayout() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default DefaultLayout;