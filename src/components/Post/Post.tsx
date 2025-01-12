import React from "react";

const Post: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white max-w-md border-b border-b-gray-300 overflow-hidden">
        <div className="p-4 flex items-center">
          <img
            alt="Profile picture"
            className="w-10 h-10 rounded-full"
            src="https://placehold.co/40x40"
          />
          <div className="ml-3">
            <span className="font-semibold text-sm">lavieenbluu</span>
            <span className="text-gray-500 text-xs">• 6d</span>
          </div>
          <i className="fas fa-ellipsis-h ml-auto"></i>
        </div>
        <img
          alt="Person in white dress sitting against a red background"
          className="w-full"
          src="https://placehold.co/500x500"
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <i className="far fa-heart text-2xl mr-3"></i>
            <i className="far fa-comment text-2xl mr-3"></i>
            <i className="far fa-paper-plane text-2xl"></i>
            <i className="far fa-bookmark text-2xl ml-auto"></i>
          </div>
          <p className="font-semibold text-sm mb-2">531,878 likes</p>
          <p className="text-sm">
            <span className="font-semibold">lavieenbluu</span>
            <a className="text-blue-500" href="#">
              @ahc.official
            </a>
            <a className="text-blue-500" href="#">
              @ellekorea
            </a>
          </p>
          <p className="text-gray-500 text-sm mb-2">View all 1,811 comments</p>
          <p className="text-gray-500 text-sm">Add a comment...</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
