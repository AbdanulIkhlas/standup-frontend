import Navbar from "../components/fragments/Navbar";

const HomePage = () => {
  return (
    <div className="font-roboto">
      <img
        src="./images/background-home.png"
        alt="backgrounnd home"
        className="w-full h-screen object-cover absolute z-10"
      ></img>
      <Navbar />
      <main className="w-full absolute z-20 mt-20 px-20">
        <h1 className="text-white text-3xl">Home</h1>
      </main>
    </div>
  );
};

export default HomePage;
