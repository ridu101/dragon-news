import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayouts = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* Header */}
      <header>
        <Header />

        {/* Latest News */}
        <section className="w-11/12 md:w-10/12 mx-auto mt-5 md:mt-8">
          <LatestNews />
        </section>

        {/* Navbar */}
        <nav className="w-11/12 md:w-10/12 mx-auto mt-5 md:mt-8">
          <Navbar />
        </nav>
      </header>

      {/* Main Layout */}
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
             sticky top-0 h-fit
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
          <Outlet />
        </section>

        {/* Right Aside */}
        <aside
          className="
            col-span-1
            md:col-span-12
            lg:col-span-3
            min-w-0
            sticky top-0 h-fit
          "
        >
          <RightAside />
        </aside>

      </main>

    </div>
  );
};

export default HomeLayouts;