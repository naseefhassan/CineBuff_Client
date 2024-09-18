import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminImg from "../assets/Images/admin.png";
import UserImg from "../assets/Images/user.png";
import AdminRouter from "../Router/AdminRouter";
import UserRouter from "../Router/UserRouter";

function Home() {
  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Conditionally rendering the user and admin side
  const handleNavigation = (role) => {
    setSelectUser(role === "admin/login");
    navigate(`/${role}`);
  };

  return (
    <div className="h-screen flex bg-gray-200 w-screen">
      {!isSidebarOpen ? (
        <div className="hidden sm:block h-screen sm:px-12 bg-black p-5">
          <h1 className="text-center text-white font-bold">DashBoard</h1>
          <div className="flex gap-3 items-center my-10">
            <img className="w-7 h-7" src={UserImg} alt="User" />
            <h1
              onClick={() => handleNavigation("user/add-rationale")}
              className="text-white cursor-pointer font-semibold"
            >
              User
            </h1>
          </div>
          <div className="flex gap-3 items-center my-10">
            <img className="w-7 h-7" src={AdminImg} alt="Admin" />
            <h1
              onClick={() => handleNavigation("admin/login")}
              className="text-white cursor-pointer font-semibold"
            >
              Admin
            </h1>
          </div>
        </div>
      ) : (
        <div className="z-10 sm:hidden bg-gray-600 h-44 absolute top-10 p-4 w-40 opacity-90 font-bold ">
          <div className="flex gap-3 items-center my-10">
            <img className="w-7 h-7" src={UserImg} alt="User" />
            <h1
              onClick={() => {handleNavigation("user/add-rationale"),setIsSidebarOpen(false)}}
              className="text-white cursor-pointer font-semibold"
            >
              User
            </h1>
          </div>
          <div className="flex gap-3 items-center my-10">
            <img className="w-7 h-7" src={AdminImg} alt="Admin" />
            <h1
              onClick={() => {handleNavigation("admin/login"),setIsSidebarOpen(false)}}
              className="text-white cursor-pointer font-semibold"
            >
              Admin
            </h1>
          </div>
        </div>
      )}

      {/* FaBars Icon to toggle the dashboard visibility on small screens */}
      <div className="absolute top-4 left-4 sm:hidden">
        <FaBars
          className="text-xl text-black cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Main Content */}
      <div className="w-full mt-5">
        <h1 className="text-center text-[4vw] font-bold font-mono">
          Rationale List Manager Application
        </h1>
        {selectUser ? <AdminRouter /> : <UserRouter />}
      </div>
    </div>
  );
}

export default Home;
