import InputForm from "../components/elements/forms/InputForm";
import SubmitButton from "../components/elements/buttons/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ToastManager from "../components/fragments/ToastManager";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { showErrorLogin } = ToastManager();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://standup-backend-g64dafi2la-et.a.run.app/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setMessage(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");
        console.log("Login success");
      } else {
        setMessage(response.data.message);
        console.log("Login failed");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        showErrorLogin();
      }
    }
  };

  return (
    <div className="font-roboto relative">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      />
      <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute z-30 px-20 h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={Auth}
          className="py-14 px-12 text-white flex flex-col justify-center items-center border border-white bg-[#612125] bg-opacity-80 backdrop-blur-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-12">LOGIN</h1>
          <div className="mb-4">
            <InputForm
              pathIcon="./svg/icon-email.svg"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="masukkan email anda"
              customClass="mb-3"
            />
          </div>
          <div className="mb-4">
            <InputForm
              pathIcon="./svg/icon-lock.svg"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="masukkan password anda"
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
      <ToastContainer />
    </div>
  );
};

export default Login;
