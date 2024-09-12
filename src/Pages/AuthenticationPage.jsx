import { Route, Routes } from "react-router-dom";
import Signup from "../Components/Authentication.jsx/Signup";
import Login from "../Components/Authentication.jsx/Login";

function AuthenticationPage() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </>
  );
}

export default AuthenticationPage;
