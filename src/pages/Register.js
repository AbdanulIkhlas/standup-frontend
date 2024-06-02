import InputForm from "../components/elements/forms/InputForm";
import SubmitButton from "../components/elements/buttons/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const navigate = useNavigate(); // Updated hook
  const [message, setMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://standup-backend-g64dafi2la-et.a.run.app/register",
        {
          email: email,
          password: password,
          nama: name,
          alamat: address,
          username: username,
          notelp: phone,
        },
        { withCredentials: false } // Pastikan ini diset ke false
      );
      navigate("/login");
      // jika berhasil regist
      if (e.response.success) {
        setMessage(e.response.data.message);
      }
    } catch (error) {
      // jika error
      if (error.response) {
        setMessage(error.response.data.message);
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
      {/* Overlay dengan opacity hitam */}
      <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute z-30 px-20 h-screen flex flex-col items-center justify-center">
        {/* FORM REGIST */}
        <form
          onSubmit={register}
          className="py-14 px-12 text-white flex flex-col justify-center items-center border border-white bg-[#612125] bg-opacity-80 backdrop-blur-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-12">DAFTAR</h1>
          {/* Data */}
          <div className="flex gap-16">
            <div>
              <p>{message}</p>
              {/* nama */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-name.svg"
                  type="text"
                  name="nama"
                  id="nama"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="masukkan nama anda"
                  customClass="mb-3"
                />
              </div>
              {/* alamat */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-address.svg"
                  type="text"
                  name="alamat"
                  id="alamat"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="ex: Jl. Raya Cibadak"
                  customClass="mb-3"
                />
              </div>
              {/* no telp */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-telephone.svg"
                  type="telp"
                  name="notelp"
                  id="notelp"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="ex: 08xxxxxxxxxx"
                  customClass="mb-3"
                />
              </div>
            </div>
            {/* akun */}
            <div>
              {/* username */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-person.svg"
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="masukkan username"
                  customClass="mb-3"
                />
              </div>
              {/* email */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-email.svg"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="masukkan email anda"
                  customClass="mb-3"
                />
              </div>
              {/* password */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-lock.svg"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="masukkan password anda"
                  customClass="mb-3"
                />
              </div>
              {/* password */}
              <div className="mb-4">
                <InputForm
                  pathIcon="./svg/icon-lock.svg"
                  type="password"
                  name="verifyPassword"
                  id="verifyPassword"
                  value={verifyPassword}
                  onChange={(event) => setVerifyPassword(event.target.value)}
                  placeholder="verifikasi password anda"
                  customClass="mb-3"
                />
              </div>
            </div>
          </div>
          <SubmitButton
            type="submit"
            customClass="bg-[#800909] px-6 py-2 rounded-lg font-bold mt-4"
          >
            Daftar
          </SubmitButton>
          <p className="mt-4">
            Sudah ada akun?
            <span className="underline text-blue-400 pl-2">
              <Link to="../login">Login Sekarang</Link>
            </span>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
