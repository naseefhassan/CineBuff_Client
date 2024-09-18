import axiosInstance from "../../Api/axios";
import { useEffect, useState } from "react";
function ShowBill() {
  const [showBill, setShowBill] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/showBill");
        setShowBill(response.data.showBill);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-[3vw] sm:text-xl">Show Bill</h1>
      {showBill.length === 0 ? (
        <h1 className="text-black text-center font-bold my-5">
          No bills found
        </h1>
      ) : (
        showBill.map((item) => (
          <div
            key={item._id}
            className="sm:flex justify-between px-3 gap-3 bg-white rounded-md my-3"
          >
            <div className=" m-3">
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Patient Name : </h1>
                <h1> {item.PatientName}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Doctor Name : </h1>
                <h1> {item.DoctorName}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Phone Number: </h1>
                <h1> {item.PhoneNumber}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Amount : </h1>
                <h1>{item.Amount} </h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Date of service: </h1>
                <h1> {item.DateOfService}</h1>
              </div>
            </div>
            <div className=" m-3">
              <div className="">
                <h1 className="font-semibold">Specialty Code</h1>
                <h1>{item.SpecialityCode}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Status</h1>
                <h1>{item.BillStatus}</h1>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowBill;
