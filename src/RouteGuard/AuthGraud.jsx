import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../Redux/Jwt";

const AuthGraud = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");

    if (!token && storedToken) {
      dispatch(setToken(storedToken));
    }

    if (!token && !storedToken) {
      navigate("/auth/login");
    }
  }, [token, dispatch, navigate]);

  return (
    <>
      <div>{token && <Outlet />}</div>;
    </>
  );
};

export default AuthGraud;
