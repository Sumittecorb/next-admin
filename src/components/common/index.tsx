import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export const errorToastify = (message: string) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
    });
}