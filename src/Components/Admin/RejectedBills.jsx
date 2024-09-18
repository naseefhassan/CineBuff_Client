import { useEffect, useState } from "react";
import axiosInstance from "../../Api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRefresh } from "../../Context/Context";

function RejectedBills() {
  const [billings, setBillings] = useState([]);
  const {refresh ,setRefresh}= useRefresh() 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/admin/getBillings");
        setBillings(response.data.billings);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [refresh]);

  const handleApproveBill = async (billId) => {
    await axiosInstance.put(`/admin/ApproveBills/${billId}`);
    toast.success("Bill is Approved");
    setRefresh(!refresh)
  };

  // Filter rejected bills
  const rejectedBills = billings.filter((item) => item.BillStatus === "Rejected");

  return (
    <div className="relative m-3 text-white">
      {rejectedBills.length == 0 ? (
          <h1 className="text-black text-center font-bold">No bills found</h1>
        ) : (
        rejectedBills.map((item) => (
          <div
            key={item._id}
            className='bg-black my-3 mx-10 p-8 rounded-lg '
          >
            <div className="sm:flex justify-between">
              <div>
                <div className="my-2">
                  <h1 className="font-semibold">Patient Name</h1>
                  <h1>{item.PatientName}</h1>
                </div>
                <div className="my-2">
                  <h1 className="font-semibold">Doctor Name </h1>
                  <h1>{item.DoctorName}</h1>
                </div>
                <div className="my-2">
                  <h1 className="font-semibold">Date of Service</h1>
                  <h1>{item.DateOfService}</h1>
                </div>
                <div className="my-2">
                  <h1 className="font-semibold">Phone Number</h1>
                  <h1>{item.PhoneNumber}</h1>
                </div>
              </div>
              <div>
                <div className='my-2'>
                  <h1 className="font-semibold">Amount</h1>
                  <h1>{item.Amount}</h1>
                </div>
                <div className='my-2'>
                  <h1 className="font-semibold">Specialty Code</h1>
                  <h1>{item.SpecialityCode}</h1>
                </div>
                <div className='my-2'>
                  <h1 className="font-semibold">Procedure Code</h1>
                  <h1>{item.ProcedureCode}</h1>
                </div>
                <div className='my-2'>
                  <h1 className="font-semibold">Procedure Description</h1>
                  <h1>{item.ProcedureDescription}</h1>
                </div>
                <div className='my-2'>
                  <h1 className="font-semibold text-red-600">Rejection Reason</h1>
                  <h1 className="flex flex-wrap text-red-600">{item.RejectReason}</h1>
                </div>
              </div>
            </div>
            <div className="flex sm:gap-5 justify-center mt-3">
              <button
                onClick={() => handleApproveBill(item._id)}
                className="bg-white text-black p-1 px-3 rounded-full hover:bg-green-400 "
              >
                Approve
              </button>
            </div>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
}

export default RejectedBills;
