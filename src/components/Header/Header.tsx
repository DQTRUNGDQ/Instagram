import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header bg-white">
      <div className="flex flex-col items-start p-4 w-64 border-r border-gray-200 h-screen">
        <div className="mb-8">
          <h1 className="instagram-font text-3xl">Instagram</h1>
        </div>
        <nav className="flex flex-col space-y-6">
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-home text-xl"></i>
            <span className="text-lg font-semibold">Home</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-search text-xl"></i>
            <span className="text-lg">Search</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-compass text-xl"></i>
            <span className="text-lg">Explore</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-video text-xl"></i>
            <span className="text-lg">Reels</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-comment-dots text-xl"></i>
            <span className="text-lg">Messages</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-heart text-xl relative">
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
            </i>
            <span className="text-lg">Notifications</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-plus-square text-xl"></i>
            <span className="text-lg">Create</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <img
              alt="Profile picture"
              className="rounded-full w-6 h-6"
              src="https://placehold.co/24x24"
            />
            <span className="text-lg">Profile</span>
          </a>
          <a className="flex items-center space-x-3 text-black" href="#">
            <i className="fas fa-bars text-xl"></i>
            <span className="text-lg">More</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
