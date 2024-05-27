import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
// import UserList from "./components/UserList"
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
