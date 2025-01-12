import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-white text-gray-400">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-2">
          <div className="space-x-2">
            <a href="#" className="hover:underline">
              About
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Help
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Press
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              API
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
          <div className="space-x-2">
            <a href="#" className="hover:underline">
              Locations
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Language
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Meta Verified
            </a>
          </div>
          <div>
            <p>© 2025 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
