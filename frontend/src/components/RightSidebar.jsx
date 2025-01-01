import React from "react";
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="flex items-center p-2   rounded-full text-gray-500 outline-none">
        <CiSearch size={"20px"} />

        <input
          type="text"
          className=" px-2 bg-transparent outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default RightSidebar;
