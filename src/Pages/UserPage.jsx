

import { Link, Route, Routes } from 'react-router-dom';
import AddRationale from '../Components/User/AddRationale';
import ShowRationale from '../Components/User/ShowRationale';
import AddBill from '../Components/User/AddBill';
import ShowBill from '../Components/User/ShowBill';
import EditRationale from '../Components/User/EditRationale';

function UserPage() {
  return (
    <div className="m-5 bg-gray-300 flex rounded-md  ">
      <div className="w-3/12 bg-black text-white p-3 rounded-md text-sm ">
        <Link to="/user/add-rationale">
          <h1 className="my-4 sm:my-10 cursor-pointer">Add Rationale</h1>
        </Link>
        <Link to="/user/show-rationale">
          <h1 className="my-4 sm:my-10 cursor-pointer">Show Rationale</h1>
        </Link>
        <Link to="/user/add-bill">
          <h1 className="my-4 sm:my-10 cursor-pointer">Add Bill</h1>
        </Link>
        <Link to="/user/show-bill">
          <h1 className="my-4 sm:my-10 cursor-pointer">Show Bill</h1>
        </Link>
    
      </div>
      <div className=" w-9/12 p-5 h-[400px] overflow-y-scroll">
        <Routes>
          <Route path="/add-rationale" element={<AddRationale />} />
          <Route path="/show-rationale" element={<ShowRationale />} />
          <Route path="/add-bill" element={<AddBill />} />
          <Route path="/show-bill" element={<ShowBill />} />
          <Route path='/edit-rationale/:rationalId' element={<EditRationale/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default UserPage;
