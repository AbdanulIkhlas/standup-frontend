import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/fragments/Navbar";
import TypingAnimation from "../components/fragments/TypingAnimation";
import TwinkleButton from "../components/elements/buttons/TwinkleButton";
import AnimatedArrow from "../components/fragments/AnimatedArrow";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "https://standup-backend-g64dafi2la-et.a.run.app/token"
      );
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUserData({
        id: decoded.id,
        nama: decoded.nama,
        email: decoded.email,
        notelp: decoded.notelp,
        alamat: decoded.alamat,
        username: decoded.username,
      });
      setExpired(decoded.exp);
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expired * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          "https://standup-backend-g64dafi2la-et.a.run.app/token"
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setUserData({
          id: decoded.id,
          nama: decoded.nama,
          email: decoded.email,
          notelp: decoded.notelp,
          alamat: decoded.alamat,
          username: decoded.username,
        });
        setExpired(decoded.exp);
        setIsLoggedIn(true);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="font-roboto">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      ></img>
      <Navbar status={isLoggedIn} userData={userData} />
      <main className="w-full absolute z-20 px-20 h-screen flex flex-col justify-center ">
        <div className="text-white leading-[60px] h-[180px]">
          <h1 className="text-[50pt] font-bold">Galau? Suntuk?</h1>
          <h2 className="text-semibold text-[30pt]">Nonton Stand Up Aja !!</h2>
          <div>
            <TypingAnimation />
          </div>
        </div>
        <div className="mt-14 text-white flex gap-3">
          <div>
            <h1 className="text-[22pt] mb-2 text-red-700 font-bold">
              Buruan Pesan!!
            </h1>
            {isLoggedIn ? (
              <Link to="/buy-ticket">
                <TwinkleButton>PESAN TIKET </TwinkleButton>
              </Link>
            ) : (
              <Link to="/login">
                <TwinkleButton>PESAN TIKET</TwinkleButton>
              </Link>
            )}
          </div>
          <AnimatedArrow />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
