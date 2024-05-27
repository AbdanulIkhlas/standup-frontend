import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      className="w-full h-[80px] absolute z-30 px-20 font-roboto shadow-lg"
      style={{
        background:
          "linear-gradient(to right, #0c0201 35%, #320702 60%, #3A0707 62%, #8d3a40 73%, #220d18 82%)",
      }}
    >
      <div className="w-full bg-opacity-75">
        <div className="container mx-auto py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-2xl">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="h-12 inline-block"
            />
          </div>
          {/* Navbar Items */}
          <div className="flex space-x-20 text-white text-lg font-semibold">
            <Link
              to="/buy-ticket"
              className="hover:text-gray-300 transition duration-300"
            >
              Beli Tiket
            </Link>
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="hover:text-gray-300 transition duration-300"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
