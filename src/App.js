import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import BuyTicket from "./pages/BuyTicket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
// import UserList from "./components/UserList"
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy-ticket" element={<BuyTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
