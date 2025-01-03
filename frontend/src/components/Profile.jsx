import React from "react";
import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <Link
            to={"/"}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoIosArrowRoundBack size={"24px"} />
          </Link>
          <div className="m-2">
            <h1 className="font-bold text-lg">ajaybhuj56</h1>
            <p className="text-sm text-gray-500">10 post</p>
          </div>
        </div>
        <img src="banner.jpg" alt="image" />
        <div
          className="absolute top-60
         border-4 ml-2 border-white rounded-full"
        >
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="120"
            round={true}
          />
        </div>
        <div>
          <button>Edit profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
