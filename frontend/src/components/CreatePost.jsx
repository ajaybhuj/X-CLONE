import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div className="">
        <div className="flex items-center justify-evenly border-b border-green-200 ">
          <div className="cursor-pointer hover:bg-gray-200 px-4 py-3 w-full text-center">
            <h1 className="font-semibold text-green-700 text-lg ">For you</h1>
          </div>
          <div className="cursor-pointer  hover:bg-gray-200 w-full text-center  px-4 py-3">
            <h1 className="font-semibold text-green-700 text-lg ">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <input
              className="w-full outline-none border-none text-xl ml-2"
              type="text"
              placeholder="What is happening?"
            />
          </div>
          <div className="flex justify-between items-center p-4 border-b border-green-300">
            <div>
              <CiImageOn size={"30px"} />
            </div>
            <button className="px-4 py-1 border-none text-lg bg-[#1D9BF0]  text-white rounded-full ">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
