import Navbar from "../components/fragments/Navbar";
import TypingAnimation from "../components/fragments/TypingAnimation";
import TwinkleButton from "../components/elements/buttons/TwinkleButton";
import { Link } from "react-router-dom";
import AnimatedArrow from "../components/fragments/AnimatedArrow";

const HomePage = () => {
  return (
    <div className="font-roboto">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      ></img>
      <Navbar />
      <main className="w-full absolute z-20 px-20 h-screen flex flex-col justify-center border border-white">
        <div className="text-white border border-white leading-[60px] h-[180px]">
          <h1 className="text-[50pt] font-bold">Galau? Suntuk?</h1>
          <h2 className="text-semibold text-[30pt]">Nonton Stand Up Aja !!</h2>
          {/* animasi text */}
          <div>
            <TypingAnimation />
          </div>
        </div>
        {/* twinkle button */}
        <div className="mt-20 text-white border border-white flex gap-3">
          <div>
            <h1 className="text-[22pt] mb-2 text-red-700 font-bold">
              Buruan Pesan!!
            </h1>
            <Link to="/buy-ticket">
              <TwinkleButton>PESAN TIKET</TwinkleButton>
            </Link>
          </div>
          {/* animasi arrow image*/}
          <AnimatedArrow />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
