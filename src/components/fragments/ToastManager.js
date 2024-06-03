// ToastManager.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastManager = () => {
  const showSuccessRegister = () => {
    toast.success("Berhasil Membuat Akun, Silahkan Login", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showSuccessLogout = () => {
    toast.success("Berhasil Logout", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorLogin = () => {
    toast.error("Username atau password salah", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showSuccessUpdateProfile = () => {
    toast.success("Profil berhasil diperbarui", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showSuccessDeleteTicket = () => {
    toast.success("Berhasil Menghapus Tiket", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return {
    showSuccessRegister,
    showSuccessLogout,
    showErrorLogin,
    showSuccessUpdateProfile,
    showSuccessDeleteTicket,
  };
};

export default ToastManager;
