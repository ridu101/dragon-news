import Header from "../components/Header";
import {
  Outlet,
  useNavigation,
  useLocation,
} from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";
import { useEffect } from "react";

const HomeLayouts = () => {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  // Route change হলে page top এ যাবে
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-base-100">
      <header>
        <Header />

        <section className="w-11/12 md:w-10/12 mx-auto mt-5 md:mt-8">
          <LatestNews />
        </section>

        <nav className="w-11/12 md:w-10/12 mx-auto mt-5 md:mt-8">
          <Navbar />
        </nav>
      </header>

      <main
        className="
                    w-11/12 md:w-10/12
                    mx-auto
                    my-5 md:my-8
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-5
                    lg:gap-6
                "
      >
        {/* Left Aside */}
        <aside
          className="
                        col-span-1
                        md:col-span-4
                        lg:col-span-3
                        min-w-0
                        lg:sticky
                        lg:top-0
                        lg:h-fit
                    "
        >
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section
          className="
                        col-span-1
                        md:col-span-8
                        lg:col-span-6
                        min-w-0
                    "
        >
          {state === "loading" ? (
            <Loading />
          ) : (
            <Outlet />
          )}
        </section>

        {/* Right Aside */}
        <aside
          className="
                        col-span-1
                        md:col-span-12
                        lg:col-span-3
                        min-w-0
                        lg:sticky
                        lg:top-0
                        lg:h-fit
                    "
        >
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;