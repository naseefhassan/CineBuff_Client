import { Route, Routes } from "react-router-dom"
import AdminPage from "../Pages/AdminPage"

function AdminRouter() {
  return (
    <div>
        <Routes>
            <Route path="/admin/*" element={<AdminPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminRouter