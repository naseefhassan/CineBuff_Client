import { Route, Routes } from "react-router-dom";
import Login from "../Components/Admin/Login";
import Billing from "../Components/Admin/Billing";
import ShowUsers from "../Components/Admin/ShowUsers";

function AdminPage() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="billings" element={<Billing />}></Route>
        <Route path="allUsers" element={<ShowUsers />}></Route>
      </Routes>
    </>
  );
}

export default AdminPage;
