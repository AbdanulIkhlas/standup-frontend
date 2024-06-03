import SubmitButton from "../components/elements/buttons/SubmitButton";
import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar";
import InputForm from "../components/elements/forms/InputForm";
import axios from "axios";
import ToastManager from "../components/fragments/ToastManager";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const { showSuccessUpdateProfile, showSuccessDeleteTicket } = ToastManager();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tickets, setTickets] = useState([]); // State for tickets

  useEffect(() => {
    getDataUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchTicket(); // Fetch tickets after user is loaded
    }
  }, [user]);

  const getDataUser = async () => {
    const storedUser = await localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://standup-backend-g64dafi2la-et.a.run.app/profile/${user.id}`
      );
      if (response.data) {
        setName(response.data.nama);
        setAddress(response.data.alamat);
        setEmail(response.data.email);
        setPhone(response.data.notelp);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `https://standup-backend-g64dafi2la-et.a.run.app/profile/update/${user.id}`,
        {
          nama: name,
          alamat: address,
          email: email,
          notelp: phone,
        }
      );
      fetchProfile();
      showSuccessUpdateProfile(); // Call the success toast function
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const fetchTicket = async () => {
    try {
      const response = await axios.get(
        `https://standup-backend-g64dafi2la-et.a.run.app/formbeli/${user.id}`
      );
      if (response.data) {
        setTickets(response.data);
      }
    } catch (error) {
      console.error("Error fetching ticket:", error);
    }
  };

  const deleteTicket = async (ticketId) => {
    try {
      await axios.delete(
        `https://standup-backend-g64dafi2la-et.a.run.app/formbeli/delete/${ticketId}`
      );
      fetchTicket(); // Refresh tickets after deletion
      showSuccessDeleteTicket();
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

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
            <form className="w-full mt-4 text-white" onSubmit={updateProfile}>
              <div className="mb-4">
                <p>Nama :</p>
                <InputForm
                  pathIcon="./svg/icon-name.svg"
                  type="text"
                  name="nama"
                  id="nama"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  value={email}
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
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  customClass="mb-3"
                />
              </div>
              <div className="mb-4">
                <p>Telepon :</p>
                <InputForm
                  pathIcon="./svg/icon-telephone.svg"
                  type="tel"
                  name="notelp"
                  id="notelp"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  customClass="mb-3"
                />
              </div>
              <button type="submit" className="w-full flex justify-center">
                <SubmitButton
                  type={"button"}
                  customClass="bg-[#1BAD01] py-1 px-3 text-white rounded shadow-xl hover:bg-[#166707]"
                >
                  Update
                </SubmitButton>
              </button>
            </form>
          </section>
          <section className="w-[60%]  flex flex-col items-center mt-10 mx-auto rounded-xl p-8  bg-primary shadow-thirdShadow ">
            <h2 className="text-white text-2xl font-semibold">Tiket</h2>
            <div className="w-full h-[320px] border border-white mt-6 overflow-auto">
              {tickets.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="border border-white px-2 py-1 text-white">
                        Judul
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
                    {tickets.map((ticket) => (
                      <tr key={ticket.id}>
                        <td className="border border-white px-2 py-1 text-white">
                          {ticket.Show.judul}
                        </td>
                        <td className="border border-white px-2 py-1 text-white">
                          {ticket.Show.tanggal}
                        </td>
                        <td className="border border-white px-2 py-1 text-white">
                          {ticket.waktu} WIB
                        </td>
                        <td className="border border-white px-2 py-1 text-white">
                          Rp {ticket.Show.harga}
                        </td>
                        <td className="border border-white px-2 py-1 text-white">
                          <div className="w-full">
                            <SubmitButton
                              type={"button"}
                              customClass="bg-[#9b2f2f] rounded shadow-xl"
                              onClick={() => deleteTicket(ticket.id)}
                            >
                              Hapus
                            </SubmitButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-white text-center py-4">
                  Tidak ada tiket yang dipesan
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
};

export default Profile;
