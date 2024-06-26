import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Navbar = ({ status }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    statusLogin();
  }, [status]);

  const statusLogin = () => {
    if (status) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const HandleLogout = async () => {
    try {
      await axios.delete(
        "https://standup-backend-g64dafi2la-et.a.run.app/logout"
      );
      navigate("/login");
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full h-[80px] absolute z-50 px-20 font-roboto shadow-lg"
      style={{
        background:
          "linear-gradient(to right, #0c0201 35%, #320702 60%, #3A0707 62%, #8d3a40 73%, #220d18 82%)",
      }}
    >
      <div className="w-full bg-opacity-75">
        <div className="container mx-auto py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-2xl">
            <Link to="/">
              <img
                src="./images/logo.png"
                alt="Logo"
                className="h-12 inline-block"
              />
            </Link>
          </div>
          {/* Navbar Items */}
          <div className="flex space-x-20 text-white text-lg font-semibold">
            {isLoggedIn ? (
              <>
                <Link
                  to="/buy-ticket"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Beli Tiket
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Profile
                </Link>
                <button
                  onClick={HandleLogout}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Beli Tiket
                </Link>
                <Link
                  to="/login"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
