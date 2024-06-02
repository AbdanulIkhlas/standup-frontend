import { useState } from "react";
// import InputForm from "../components/elements/forms/InputForm";
import SubmitButton from "../components/elements/buttons/SubmitButton";
// import { Link } from "react-router-dom";

const BuyTicket = () => {
  const ListTicket = [
    {
      judul: "Open Mic Coki Pardede",
      harga: 50000,
      tanggal: "28-05-2024",
      waktu: "16.00",
    },
    {
      judul: "Antonyius Kiwkiw",
      harga: 80000,
      tanggal: "15-06-2024",
      waktu: "19.00",
    },
    {
      judul: "Rawr in aja",
      harga: 50000,
      tanggal: "28-06-2024",
      waktu: "20.00",
    },
    {
      judul: "Dzawin tour",
      harga: 100000,
      tanggal: "09-07-2024",
      waktu: "21.00",
    },
  ];

  const [selectedTicket, setSelectedTicket] = useState(ListTicket[0]);

  const handleSelectChange = (event) => {
    const selectedJudul = event.target.value;
    const ticket = ListTicket.find((t) => t.judul === selectedJudul);
    setSelectedTicket(ticket);
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
        {/* FORM BELI TIKET */}
        <form
          action=""
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
              {ListTicket.map((ticket) => (
                <option
                  key={ticket.judul}
                  value={ticket.judul}
                  className="bg-[#612125]"
                  name="judul"
                >
                  {ticket.judul}
                </option>
              ))}
            </select>
          </div>
          <div className="transition duration-300 ease-in-out transform w-full">
            {/* harga */}
            <div>
              <div className="mb-2">Harga:</div>
              <div className="mb-2 border border-white p-2 rounded ">
                Rp {selectedTicket.harga}
              </div>
            </div>
            {/* tanggal */}
            <div>
              <div className="mb-2">Tanggal:</div>
              <div className="mb-2 border border-white p-2 rounded">
                {selectedTicket.tanggal}
              </div>
            </div>
            {/* waktu */}
            <div>
              <div className="mb-2">Waktu:</div>
              <div className="mb-2 border border-white p-2 rounded">
                {selectedTicket.waktu} WIB
              </div>
            </div>
          </div>
          {/* hidden input */}
          <input type="hidden" name="harga" value={selectedTicket.harga} />
          <input type="hidden" name="tanggal" value={selectedTicket.tanggal} />
          <input type="hidden" name="waktu" value={selectedTicket.waktu} />
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
