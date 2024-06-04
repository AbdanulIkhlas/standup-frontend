import SubmitButton from "../components/elements/buttons/SubmitButton";
import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar";
import InputForm from "../components/elements/forms/InputForm";
import axios from "axios";
import ToastManager from "../components/fragments/ToastManager";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Fix import statement

const Profile = () => {
  const { showSuccessUpdateProfile, showSuccessDeleteTicket } = ToastManager();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "https://standup-backend-g64dafi2la-et.a.run.app/token"
      );
      const newToken = response.data.accessToken;
      setToken(newToken);
      const decoded = jwtDecode(newToken);
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
        const newToken = response.data.accessToken;
        config.headers.Authorization = `Bearer ${newToken}`;
        setToken(newToken);
        const decoded = jwtDecode(newToken);
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
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (userData) {
      fetchProfile();
      fetchTicket();
    }
  }, [userData]);

  const fetchProfile = async () => {
    try {
      const response = await axiosJWT.get(
        `https://standup-backend-g64dafi2la-et.a.run.app/profile/${userData.id}`
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
      await axiosJWT.put(
        `https://standup-backend-g64dafi2la-et.a.run.app/profile/update/${userData.id}`,
        {
          nama: name,
          alamat: address,
          email: email,
          notelp: phone,
        }
      );
      fetchProfile();
      showSuccessUpdateProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const fetchTicket = async () => {
    try {
      const response = await axiosJWT.get(
        `https://standup-backend-g64dafi2la-et.a.run.app/formbeli/${userData.id}`
      );
      console.log(response.data);
      if (response.data) {
        setTickets(response.data);
      }
    } catch (error) {
      console.error("Error fetching ticket:", error);
    }
  };

  const deleteTicket = async (ticketId) => {
    try {
      await axiosJWT.delete(
        `https://standup-backend-g64dafi2la-et.a.run.app/formbeli/delete/${ticketId}`
      );
      fetchTicket();
      showSuccessDeleteTicket();
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  const formatWaktu = (waktu) => {
    const [jam, menit] = waktu.split(":");
    return `${jam}.${menit}`;
  };

  return (
    <div className="font-roboto relative ">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute"
      />
      <Navbar status={isLoggedIn} />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute top-20 px-20 h-full mt-10 ">
        <h1 className="text-white text-4xl font-bold text-center">Profile</h1>
        <div className="flex justify-between">
          <section className="w-[30%] flex flex-col items-center mt-10 mx-auto rounded-xl p-8 bg-primary shadow-thirdShadow">
            <h2 className="text-white text-2xl font-semibold">Data User</h2>
            <form className="w-full mt-4 text-white" onSubmit={updateProfile}>
              <div className="mb-4">
                <p>Nama </p>
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
          <section className="w-[60%] flex flex-col items-center mt-10 mx-auto rounded-xl p-8 bg-primary shadow-thirdShadow">
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
                        Jumlah
                      </th>
                      <th className="border border-white px-2 py-1 text-white">
                        Total Harga
                      </th>
                      <th className="border border-white px-2 py-1 text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="text-white">
                        <td className="border border-white px-2 py-1">
                          {ticket.show.judul}
                        </td>
                        <td className="border border-white px-2 py-1">
                          {new Date(ticket.show.tanggal).toLocaleDateString("en-GB")}
                        </td>
                        <td className="border border-white px-2 py-1">
                          {formatWaktu(ticket.show.waktu)} WIB
                        </td>
                        <td className="border border-white px-2 py-1">
                          Rp {ticket.show.harga}
                        </td>
                        <td className="border border-white px-2 py-1">
                          {ticket.jumlah}
                        </td>
                        <td className="border border-white px-2 py-1">
                          Rp {ticket.show.harga * ticket.jumlah}
                        </td>
                        <td className="border border-white px-2 py-1">
                          <button
                            onClick={() => deleteTicket(ticket.id)}
                            className="bg-red-600 py-1 px-3 rounded hover:bg-red-800"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-white text-center py-2">No tickets found</p>
              )}
            </div>
          </section>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Profile;
