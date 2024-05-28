import InputForm from "../components/elements/forms/InputForm";
import SubmitButton from "../components/elements/buttons/SubmitButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="font-roboto relative">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      />
      {/* Overlay dengan opacity hitam */}
      <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute z-30 px-20 h-screen flex flex-col items-center justify-center">
        {/* FORM LOGIN */}
        <form
          action=""
          className="py-14 px-12 text-white flex flex-col justify-center items-center border border-white bg-[#612125] bg-opacity-80 backdrop-blur-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-12">LOGIN</h1>
          <div className="mb-4">
            <InputForm
              pathIcon="./svg/icon-person.svg"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              customClass="mb-3"
            />
          </div>
          <div className="mb-4">
            <InputForm
              pathIcon="./svg/icon-lock.svg"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              customClass="mb-3"
            />
          </div>
          <SubmitButton
            type="submit"
            customClass="bg-[#800909] px-6 py-2 rounded-lg font-bold mt-4"
          >
            Login
          </SubmitButton>
          <p className="mt-4">
            Belum ada akun?
            <span className="underline text-blue-400 pl-2">
              <Link to="../register">Daftar Sekarang</Link>
            </span>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
