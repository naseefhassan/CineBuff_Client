import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function PrivateRoute() {
  const naviagte = useNavigate();
  const LocalJwt = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (LocalJwt) {
      naviagte("/user/add-rationale");
    }
  }, [naviagte, LocalJwt]);
  return <>{!LocalJwt && <Outlet />}</>;
}

export default PrivateRoute;
