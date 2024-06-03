// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/fragments/Navbar";
// import TypingAnimation from "../components/fragments/TypingAnimation";
// import TwinkleButton from "../components/elements/buttons/TwinkleButton";
// import AnimatedArrow from "../components/fragments/AnimatedArrow";

// const HomePage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div className="font-roboto">
//       <img
//         src="./images/background-home.png"
//         alt="background home"
//         className="w-full h-screen object-cover absolute z-10"
//       ></img>
//       <Navbar status={isLoggedIn} />
//       <main className="w-full absolute z-20 px-20 h-screen flex flex-col justify-center">
//         <div className="text-white leading-[60px] h-[180px]">
//           <h1 className="text-[50pt] font-bold">Galau? Suntuk?</h1>
//           <h2 className="text-semibold text-[30pt]">Nonton Stand Up Aja !!</h2>
//           <div>
//             <TypingAnimation />
//           </div>
//         </div>
//         {isLoggedIn && user && (
//           <div className="text-white mt-6">
//             <p>Welcome, {user.nama}!</p>
//           </div>
//         )}
//         <div className="mt-14 text-white flex gap-3">
//           <div>
//             <h1 className="text-[22pt] mb-2 text-red-700 font-bold">
//               Buruan Pesan!!
//             </h1>
//             {isLoggedIn ? (
//               <Link to="/buy-ticket">
//                 <TwinkleButton>PESAN TIKET</TwinkleButton>
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <TwinkleButton>PESAN TIKET</TwinkleButton>
//               </Link>
//             )}
//           </div>
//           <AnimatedArrow />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
