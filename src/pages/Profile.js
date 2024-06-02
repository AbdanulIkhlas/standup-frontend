import SubmitButton from "../components/elements/buttons/SubmitButton";

const Profile = () => {
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
        <h1 className="text-white text-4xl font-bold">Profile</h1>
        <section className="w-[60%] flex flex-col items-center mt-10  rounded-xl p-8 bg-primary shadow-thirdShadow">
          <h2 className="text-white text-2xl font-semibold">Data User</h2>
          <div className="flex justify-between w-full  mt-4">
            <div className="w-[48%]">
              <div className="w-full border-b border-white py-1 px-2 mb-4 text-white">
                <h3>Nama :</h3>
                <p>Surya</p>
              </div>
              <div className="w-full border-b border-white py-1 px-2 mb-4 text-white">
                <h3>Email :</h3>
                <p>5fUeh@example.com</p>
              </div>
            </div>
            <div className="w-[48%]">
              <div className="w-full border-b border-white py-1 px-2 mb-4 text-white">
                <h3>Alamat :</h3>
                <p>Bandung</p>
              </div>
              <div className="w-full border-b border-white py-1 px-2 mb-4 text-white">
                <h3>No Telp :</h3>
                <p>081234567890</p>
              </div>
            </div>
          </div>

          <h2 className="text-white text-2xl font-semibold mt-8">Tiket</h2>
          <div className="w-full border border-white mt-4">
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
                      <SubmitButton type={"button"} customClass="bg-[#9b2f2f] rounded shadow-xl">
                        Hapus
                      </SubmitButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
