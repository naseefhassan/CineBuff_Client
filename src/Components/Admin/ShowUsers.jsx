import { useEffect, useState } from "react";
import User from "../../assets/Images/user.png";
import axiosInstance from "../../Api/axios";
function ShowUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/admin/getAllUser");
        setUser(response.data.User);       
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-3 justify-center ">
     {user.map((item)=>(
         <div key={item._id} className="border-2 shadow-lg w-52 h-60 flex flex-col flex-wrap items-center bg-gray-500 rounded-lg py-5 text-white m-5">
         <img className="w-20 h-20 mb-3 border-2 rounded-full p-1 border-black" src={User} alt="user image" />
         <h1>{item.username}</h1>
         <h1>{item.email}</h1>
       </div>
     ))}
    </div>
  );
}

export default ShowUsers;
