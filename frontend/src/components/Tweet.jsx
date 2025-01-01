import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="flex p-3 ">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold ml-2">Ajay Bhuj</h1>
              <p className="text-gray-500 text-sm ml-1">@ajaybhuj56 . 1m</p>
            </div>
            <div className="mt-2">
              <p>Hello guys learning MERN Stack from today</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-1">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegCommentAlt size={"20px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="p-2 hover:bg-pink-300 rounded-full cursor-pointer">
                  <CiHeart size={"24px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size={"24px"} />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
