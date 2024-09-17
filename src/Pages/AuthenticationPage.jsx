import { Route, Routes } from "react-router-dom";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";

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
