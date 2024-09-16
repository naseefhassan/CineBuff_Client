import axiosInstance from "../../Api/axios";
import { useEffect, useState } from "react";
function ShowBill() {
  const [showBill, setShowBill] = useState();
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
  console.log(showBill);

  return (
    <div>
      <h1 className="text-center font-bold text-[3vw] sm:text-xl">Show Bill</h1>
      {showBill &&
        showBill.map((item) => (
          <div
            key={item._id}
            className="sm:flex justify-between px-3 gap-3 bg-white rounded-md my-3"
          >
            <div className=" m-3">
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Patient Name : </h1>
                <h1> {item.patientName}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Doctor Name : </h1>
                <h1> {item.doctorName}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Phone Number: </h1>
                <h1> {item.phoneNumber}</h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Cost : </h1>
                <h1>{item.cost} </h1>
              </div>
              <div className="sm:flex gap-1 my-1">
                <h1 className="font-semibold">Date of service: </h1>
                <h1> {item.dateOfService}</h1>
              </div>
            </div>
            <div className=" m-3">
              <div className="">
                <h1 className="font-semibold">Specialty Code</h1>
                <h1>{item.specialtyCode}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Status</h1>
                <h1>{item.billStatus}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold">Rationale</h1>
                <h1>.........</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowBill;
