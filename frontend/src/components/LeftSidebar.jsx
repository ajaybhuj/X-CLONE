import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";

const LeftSideBar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            src="https://www.freepnglogos.com/new-twitter-x-logo-transparent-png-4.png"
            alt="x-logo"
            width={"25px"}
          />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CiHashtag size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <IoIosNotificationsOutline size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CgProfile size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CiBookmarkCheck size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CiLogout size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full text-white rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
