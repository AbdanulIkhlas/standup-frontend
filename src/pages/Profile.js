import SubmitButton from "../components/elements/buttons/SubmitButton";
import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar";
import InputForm from "../components/elements/forms/InputForm";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(false);
  const [address, setAddress] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);


  
  return (
    <div className="font-roboto relative ">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute"
      />
      <Navbar status={isLoggedIn} />
      {/* Overlay dengan opacity hitam */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute top-20 px-20 h-full mt-10 ">
        <h1 className="text-white text-4xl font-bold text-center">Profile</h1>
        <div className="flex justify-between">
          <section className="w-[30%] flex flex-col items-center mt-10 mx-auto rounded-xl p-8  bg-primary shadow-thirdShadow">
            <h2 className="text-white text-2xl font-semibold">Data User</h2>
            <form className="w-full mt-4 text-white">
              <div className="mb-4">
                <p>Nama :</p>
                <InputForm
                  pathIcon="./svg/icon-name.svg"
                  type="text"
                  name="nama"
                  id="nama"
                  value="Surya"
                  customClass="mb-3"
                />
              </div>
              <div className="mb-4">
                <p>Email :</p>
                <InputForm
                  pathIcon="./svg/icon-email.svg"
                  type="email"
                  name="email"
                  id="email"
                  value={`5fUeh@example.com`}
                  onChange={(event) => setEmail(event.target.value)}
                  customClass="mb-3"
                />
              </div>
              <div className="mb-4">
                <p>Alamat :</p>
                <InputForm
                  pathIcon="./svg/icon-address.svg"
                  type="text"
                  name="alamat"
                  id="alamat"
                  value={`Bandung`}
                  onChange={(event) => setAddress(event.target.value)}
                  customClass="mb-3"
                />
              </div>
              <div className="mb-4">
                <p>Telepon :</p>
                <InputForm
                  pathIcon="./svg/icon-telephone.svg"
                  type="telp"
                  name="notelp"
                  id="notelp"
                  value={`082273647465`}
                  onChange={(event) => setPhone(event.target.value)}
                  customClass="mb-3"
                />
              </div>
              <button className="w-full flex justify-center">
                <SubmitButton
                  type={"button"}
                  customClass="bg-[#1BAD01] py-1 px-3 text-white  rounded shadow-xl"
                >
                  Update
                </SubmitButton>
              </button>
            </form>
          </section>
          <section className="w-[60%]  flex flex-col items-center mt-10 mx-auto rounded-xl p-8  bg-primary shadow-thirdShadow ">
            <h2 className="text-white text-2xl font-semibold">Tiket</h2>
            <div className="w-full h-[320px] border border-white mt-6 overflow-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border border-white px-2 py-1 text-white">
                      Nama
                    </th>
                    <th className="border border-white px-2 py-1 text-white">
                      Tanggal
                    </th>
                    <th className="border border-white px-2 py-1 text-white">
                      Waktu
                    </th>
                    <th className="border border-white px-2 py-1 text-white">
                      Harga
                    </th>
                    <th className="border border-white px-2 py-1 text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-white px-2 py-1 text-white">
                      Open Mic Coki Pardede
                    </td>
                    <td className="border border-white px-2 py-1 text-white">
                      28-05-2024
                    </td>
                    <td className="border border-white px-2 py-1 text-white">
                      16.00 WIB
                    </td>
                    <td className="border border-white px-2 py-1 text-white">
                      Rp 50000
                    </td>
                    <td className="border border-white px-2 py-1 text-white">
                      <div className="w-full">
                        <SubmitButton
                          type={"button"}
                          customClass="bg-[#9b2f2f] rounded shadow-xl"
                        >
                          Hapus
                        </SubmitButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
