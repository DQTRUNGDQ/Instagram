import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-white footer text-ig-tertiary-text mt-4">
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-2">
          <div>
            <div className="space-x-1">
              <a href="#" className="hover:underline text-xs">
                About
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Help
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Press
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                API
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Jobs
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Terms
              </a>
            </div>

            <div className="space-x-1">
              <a href="#" className="hover:underline text-xs">
                Locations
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Language
              </a>
              <span>·</span>
              <a href="#" className="hover:underline text-xs">
                Meta Verified
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs">© 2025 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
