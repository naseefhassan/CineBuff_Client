import { Route, Routes } from "react-router-dom"
import UserPage from "../Pages/UserPage"

function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path="/user/*" element={<UserPage/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRouter