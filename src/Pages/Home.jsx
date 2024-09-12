import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminImg from "../assets/Images/admin.png";
import UserImg from "../assets/Images/user.png";
import AdminRouter from "../Router/AdminRouter";
import UserRouter from "../Router/UserRouter";

function Home() {
  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(false);

  //conditionally rendering the user and admin side
  const handleNavigation = (role) => {
    setSelectUser(role === "admin");
    navigate(`/${role}`); 
  };

  return (
    <div className="h-screen flex bg-gray-200">
      <div className="h-screen sm:px-12 bg-black p-5">
        <h1 className="text-center text-white font-bold">DashBoard</h1>
        <div className="flex gap-3 items-center my-10">
          <img className="w-7 h-7" src={UserImg} alt="User" />
          <h1
            onClick={() => handleNavigation("user")}
            className="text-white cursor-pointer font-semibold"
          >
            User
          </h1>
        </div>
        <div className="flex gap-3 items-center my-10">
          <img className="w-7 h-7" src={AdminImg} alt="Admin" />
          <h1
            onClick={() => handleNavigation("admin")}
            className="text-white cursor-pointer font-semibold"
          >
            Admin
          </h1>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-center text-4xl  font-bold font-mono">
          Rationale List Manager Application
        </h1>
        {selectUser ? <AdminRouter /> : <UserRouter />}
      </div>
    </div>
  );
}

export default Home;
