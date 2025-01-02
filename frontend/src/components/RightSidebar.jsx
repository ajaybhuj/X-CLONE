import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
const RightSidebar = () => {
  return (
    <div className="w-[25%] ml-7 ">
      <div className="flex items-center p-2   rounded-full  outline-none bg-gray-200">
        <CiSearch size={"20px"} />

        <input
          type="text"
          className=" px-2 bg-transparent outline-none"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4 ">
        <h1 className="font-bold text-lg my-3">Who to Follow</h1>
        <div className="flex items-center justify-between m-3">
          <div className="flex">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
              size="40"
              round={true}
            />
            <div className="ml-2">
              <h1 className="font-bold">Ajay Bhuj</h1>
              <p className="text-sm">@ajaybhuj56</p>
            </div>
            <div className="">
              <button className="px-4 py-1 ml-2 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
