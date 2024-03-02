import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import UserLeftMenu from "./UserLeftMenu";

import { Outlet } from "react-router-dom";

const users = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <UserLeftMenu />
        <Outlet />
      </div>
      <Footer/>
      {/* <p>i am from users page</p> */}
    </div>
  );
};

export default users;
