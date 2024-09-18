import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../Redux/Jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthGraud = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    console.log(storedToken);
    console.log(token);
    
    if (!token && storedToken) {
      dispatch(setToken(storedToken));
    }

    if (!token && !storedToken) {
      navigate("/auth/login");
      toast.error("Please Login 🤗");
    }
  }, [token, dispatch, navigate]);

  return (
    <>
      <div>{token && <Outlet />}</div>;
      <ToastContainer />
    </>
  );
};

export default AuthGraud;
