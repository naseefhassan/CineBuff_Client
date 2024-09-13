import { Link, Route, Routes } from 'react-router-dom';
import AddRationale from '../Components/Admin/AddRationale';
import ShowRationale from '../Components/Admin/ShowRationale';
import AddBill from '../Components/Admin/AddBill';
import ShowBill from '../Components/Admin/ShowBill';
import ShowUser from '../Components/Admin/ShowUser';

function AdminPage() {
  return (
    <div className="m-10 bg-gray-300 flex rounded-md ">
      <div className="w-3/12 bg-black text-white p-3 rounded-md ">
        <Link to="/admin/add-rationale">
          <h1 className="sm:my-10 cursor-pointer">Add Rationale</h1>
        </Link>
        <Link to="/admin/show-rationale">
          <h1 className="sm:my-10 cursor-pointer">Show Rationale</h1>
        </Link>
        <Link to="/admin/add-bill">
          <h1 className="sm:my-10 cursor-pointer">Add Bill</h1>
        </Link>
        <Link to="/admin/show-bill">
          <h1 className="sm:my-10 cursor-pointer">Show Bill</h1>
        </Link>
        <Link to="/admin/show-users">
          <h1 className="sm:my-10 cursor-pointer">Show Users</h1>
        </Link>
      </div>
      <div className=" w-9/12 p-5 h-[400px] overflow-y-scroll">
        <Routes>
          <Route path="/add-rationale" element={<AddRationale />} />
          <Route path="/show-rationale" element={<ShowRationale />} />
          <Route path="/add-bill" element={<AddBill />} />
          <Route path="/show-bill" element={<ShowBill />} />
          <Route path="/show-users" element={<ShowUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPage;
