import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <header className="py-3 w-11/12 md:w-10/12 mx-auto">
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;