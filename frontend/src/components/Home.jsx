import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-between w-[80%] m-auto mt-9 ">
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Home;
