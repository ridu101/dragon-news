// import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main>
          <section className="left-nav"></section>
          <section className="main">
          <Outlet></Outlet>
          </section>
          <section className="right-nav"></section>
        </main>
      </div>
    );
};

export default HomeLayouts;