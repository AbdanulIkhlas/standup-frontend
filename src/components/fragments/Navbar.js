import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = ({ status }) => {
  // State to manage login status
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

  const Logout = async () => {
    try {
      await axios.delete(
        "https://standup-backend-g64dafi2la-et.a.run.app/logout",
        {
          withCredentials: true,
        }
      );
      setIsLoggedIn(false);
      // redirect ke homepage before login
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              <>
                <Link
                  to="/profile"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Profile
                </Link>
                <button
                  onClick={Logout}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Logout {isLoggedIn}
                </button>
              </>
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
