import SubmitButton from "../components/elements/buttons/SubmitButton";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState({});
  const [ticketList, setTicketList] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchTickets();
    getUserData();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(
        "https://standup-backend-g64dafi2la-et.a.run.app/show"
      );
      if (response.data) {
        setTicketList(response.data);
        setSelectedTicket(response.data[0]); // Set default selected ticket
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const getUserData = async () => {
    const storedUser = await localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
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
    if (user && selectedTicket && selectedTicket.harga) {
      try {
        const data = {
          id_user: user.id,
          id_show: selectedTicket.id,
        };
        await axios.post(
          "https://standup-backend-g64dafi2la-et.a.run.app/formbeli/create",
          data
        );
        // Redirect to profile page
        navigate("/profile");
      } catch (error) {
        console.error("Error submitting ticket:", error);
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
          onSubmit={handleSubmit}
          className="py-14 px-12 w-[500px] text-white flex flex-col justify-center items-center border border-white bg-[#612125] bg-opacity-80 backdrop-blur-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-6">BELI TIKET</h1>
          <div className="mb-4 w-full">
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
              <div className="mb-4">
                <div className="mb-2">Harga:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  Rp {selectedTicket.harga}
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2">Tanggal:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  {selectedTicket.tanggal
                    ? new Date(selectedTicket.tanggal).toLocaleDateString(
                        "en-GB"
                      )
                    : ""}
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2">Waktu:</div>
                <div className="mb-2 border border-white p-2 rounded">
                  {selectedTicket.waktu
                    ? formatWaktu(selectedTicket.waktu)
                    : ""}{" "}
                  WIB
                </div>
              </div>
            </div>
          )}
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
