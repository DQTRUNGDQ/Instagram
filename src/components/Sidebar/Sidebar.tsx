import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white mt-4 p-4">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center mb-4">
          <img
            alt="Profile picture of justgnurtmee03"
            className="w-12 h-12 rounded-full"
            src="https://placehold.co/50x50"
          />
          <div className="ml-3">
            <p className="font-semibold text-sm">justgnurtmee03</p>
            <p className="text-gray-500 text-sm">Quốc Trung</p>
          </div>
          <a
            className="ml-auto text-ig-primary-button text-xs font- mr-14"
            href="#"
          >
            Switch
          </a>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 text-sm font-semibold">
            Suggested for you
          </p>
          <a className="text-xs font-semibold mr-14" href="#">
            See All
          </a>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <img
              alt="Profile picture of instagram"
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/50x50"
            />
            <div className="ml-3 flex-1 ">
              <p className="font-semibold text-sm">
                instagram
                <i className="fas fa-check-circle text-ig-primary-button"></i>
              </p>
              <p className="text-gray-500 text-xs">
                Followed by english_not_boring...
              </p>
            </div>
            <a
              className="text-ig-primary-button text-xs font-semibold mr-14"
              href="#"
            >
              Follow
            </a>
          </div>

          <div className="flex items-center">
            <img
              alt="Profile picture of ttthvan"
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/50x50"
            />
            <div className="ml-3 flex-1">
              <p className="font-semibold text-sm">ttthvan</p>
              <p className="text-gray-500 text-xs">
                Followed by bruhhlee + 3 more
              </p>
            </div>
            <a
              className="text-ig-primary-button text-xs font-semibold mr-14"
              href="#"
            >
              Follow
            </a>
          </div>
          <div className="flex items-center">
            <img
              alt="Profile picture of jessiemy__"
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/50x50"
            />
            <div className="ml-3 flex-1">
              <p className="font-semibold text-sm">jessiemy__</p>
              <p className="text-gray-500 text-xs">Suggested for you</p>
            </div>
            <a
              className="text-ig-primary-button text-xs font-semibold mr-14"
              href="#"
            >
              Follow
            </a>
          </div>

          <div className="flex items-center">
            <img
              alt="Profile picture of truongdev2k3"
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/50x50"
            />
            <div className="ml-3 flex-1">
              <p className="font-semibold text-sm">truongdev2k3</p>
              <p className="text-gray-500 text-xs">Suggested for you</p>
            </div>
            <a
              className="text-ig-primary-button text-xs font-semibold mr-14"
              href="#"
            >
              Follow
            </a>
          </div>

          <div className="flex items-center">
            <img
              alt="Profile picture of gkartlerry"
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/50x50"
            />
            <div className="ml-3 flex-1">
              <p className="font-semibold text-sm">gkartlerry</p>
              <p className="text-gray-500 text-xs">Followed by an.bamii</p>
            </div>
            <a
              className="text-ig-primary-button text-xs font-semibold mr-14"
              href="#"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
