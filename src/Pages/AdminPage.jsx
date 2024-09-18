import { Route, Routes } from "react-router-dom";
import Login from "../Components/Admin/Login";
import Billing from "../Components/Admin/Billing";

function AdminPage() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/billings" element={<Billing />}></Route>
      </Routes>
    </>
  );
}

export default AdminPage;
