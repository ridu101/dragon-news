import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header />

        <section className="w-10/12 mx-auto mt-8">
          <LatestNews />
        </section>
        <nav className="w-10/12 mx-auto mt-8">
          <Navbar></Navbar>
        </nav>
      </header>

      <main>
        <section className="left-nav"></section>

        <section className="main">
          <Outlet />
        </section>

        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayouts;
