import { Route, Routes } from "react-router-dom";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import PrivateRoute from "../RouteGuard/PrivateRoute";

function AuthenticationPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AuthenticationPage;
