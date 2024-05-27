import { useState } from "react";

const Login = () => {
  return (
    <div className="font-roboto relative">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      />
      {/* Overlay dengan opacity hitam */}
      <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-70 border border-white text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        sunt.
      </div>
      <main className="w-full absolute z-30 px-20 h-screen flex items-center justify-center text-white ">
        {/* Isi halaman login */}
        inni dari main
      </main>
    </div>
  );
};

export default Login;
