import SubmitButton from "../components/elements/buttons/SubmitButton";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Navbar from "../components/fragments/Navbar";

const BuyTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState({});
  const [ticketList, setTicketList] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    refreshToken();
    fetchTickets();
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
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchTickets = async () => {
    try {
      const response = await axiosJWT.get(
        "https://standup-backend-g64dafi2la-et.a.run.app/show",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        setTicketList(response.data);
        setSelectedTicket(response.data[0]); // Set default selected ticket
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleSelectChange = (event) => {
    const selectedJudul = event.target.value;
    const ticket = ticketList.find((t) => t.judul === selectedJudul);
    setSelectedTicket(ticket);
  };

  const formatWaktu = (waktu) => {
    const [jam, menit] = waktu.split(":");
    return `${jam}.${menit}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    if (userData && selectedTicket && selectedTicket.harga) {
      try {
        const data = {
          id_user: userData.id,
          id_show: selectedTicket.id,
          jumlah: jumlah,
        };
        await axiosJWT.post(
          "https://standup-backend-g64dafi2la-et.a.run.app/formbeli/create",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Redirect to profile page
        navigate("/profile");
      } catch (error) {
        console.error("Error submitting ticket:", error);
        setError("Gagal membeli tiket. Silakan coba lagi.");
      }
    } else {
      setError("Semua data harus diisi.");
    }
  };

  return (
    <div className="font-roboto relative">
      <img
        src="./images/background-home.png"
        alt="background home"
        className="w-full h-screen object-cover absolute z-10"
      />
      <Navbar status={true}/>
      <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-70"></div>
      <main className="w-full absolute z-30 px-20 h-screen flex flex-col items-center justify-center pt-20">
        <form
          onSubmit={handleSubmit}
          className="py-6 px-6 w-[450px] text-white flex flex-col justify-center items-center border border-white bg-[#612125] bg-opacity-80 backdrop-blur-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-6">BELI TIKET</h1>
          <div className="mb-2 w-full">
            <label htmlFor="ticket" className="block mb-2">
              Pilih Judul:
            </label>
            <select
              id="ticket"
              name="ticket"
              className="w-full p-2 rounded bg-transparent border border-white focus:outline-none focus:border-red-400 transition duration-300"
              onChange={handleSelectChange}
            >
              {ticketList.map((ticket) => (
                <option
                  key={ticket.judul}
                  value={ticket.judul}
                  className="bg-[#612125]"
                >
                  {ticket.judul}
                </option>
              ))}
            </select>
          </div>
          {selectedTicket && selectedTicket.harga && (
            <div className="transition duration-300 ease-in-out transform w-full">
              <div className="mb-2">
                <div className="mb-2">Harga:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  Rp {selectedTicket.harga}
                </div>
              </div>
              <div className="mb-2">
                <div className="mb-2">Tanggal:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  {selectedTicket.tanggal
                    ? new Date(selectedTicket.tanggal).toLocaleDateString(
                        "en-GB"
                      )
                    : ""}
                </div>
              </div>
              <div className="mb-2">
                <div className="mb-2">Waktu:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  {selectedTicket.waktu
                    ? formatWaktu(selectedTicket.waktu)
                    : ""}{" "}
                  WIB
                </div>
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="jumlah" className="mb-2">
                  Jumlah:
                </label>
                <input
                  type="number"
                  id="jumlah"
                  name="jumlah"
                  placeholder="Masukkan Jumlah Tiket"
                  value={jumlah}
                  onChange={(event) => setJumlah(event.target.value)}
                  className="mb-2 border border-white p-2 rounded bg-transparent"
                  required
                />
              </div>
              <input type="hidden" value={selectedTicket.id} />
              <input type="hidden" value={userData.id} />
            </div>
          )}
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <SubmitButton
            type="submit"
            customClass="bg-[#800909] px-6 py-2 rounded-lg font-bold mt-4"
          >
            Beli Tiket
          </SubmitButton>
        </form>
      </main>
    </div>
  );
};

export default BuyTicket;
