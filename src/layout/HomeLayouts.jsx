import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

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
      <main  className=" w-10/12 mx-auto my-3  grid grid-cols-12 gap-4" >
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
