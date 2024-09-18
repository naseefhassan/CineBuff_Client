import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axiosInstance from "../../Api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBill() {
  const [SpecialityCode, setSpecialityCode] = useState([]);

  const initialValues = {
    PatientName: "",
    DoctorName: "",
    PhoneNumber: "",
    ProcedureCode: "",
    ProcedureDescription: "",
    Amount: "",
    DateOfService: "",
    SpecialityCode: "",
  };

  const validationSchema = Yup.object().shape({
    PatientName: Yup.string().required("Patient Name is required"),
    DoctorName: Yup.string().required("Doctor Name is required"),
    PhoneNumber: Yup.string().min(10).required("Phone Number is required"),
    ProcedureCode: Yup.string().required("Procedure Code is required"),
    ProcedureDescription: Yup.string().required(
      "Procedure Description is required"
    ),
    Amount: Yup.number().required("Amount is required"),
    DateOfService: Yup.date().required("Date of Service is required"),
    SpecialityCode: Yup.string().required("Speciality Code is required"),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/getSpecialityCodes");
        setSpecialityCode(response.data.SpecialityCode);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-md p-6 rounded-lg ">
        <h1 className="text-center font-bold text-[3vw] sm:text-xl mb-6">
          Add Bill
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log("Form data", values);
            const response = await axiosInstance.post("/add-bill", values);
            console.log(response);
            
            if(response.status === 200){

              toast.success("New Bill Added");
            }else{
              toast.error('Failed to Add New')
            }
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Patient Name */}
              <div>
                <label
                  htmlFor="PatientName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Patient Name
                </label>
                <Field
                  name="PatientName"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="PatientName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Doctor Name */}
              <div>
                <label
                  htmlFor="DoctorName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Doctor Name
                </label>
                <Field
                  name="DoctorName"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="DoctorName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Field
                  name="PhoneNumber"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="PhoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Procedure Code */}
              <div>
                <label
                  htmlFor="ProcedureCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Procedure Code
                </label>
                <Field
                  name="ProcedureCode"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="ProcedureCode"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Procedure Description */}
              <div>
                <label
                  htmlFor="ProcedureDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Procedure Description
                </label>
                <Field
                  name="ProcedureDescription"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="ProcedureDescription"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Amount */}
              <div>
                <label
                  htmlFor="Amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <Field
                  name="Amount"
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="Amount"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Date of Service */}
              <div>
                <label
                  htmlFor="DateOfService"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Service
                </label>
                <Field
                  name="DateOfService"
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="DateOfService"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Speciality Code */}
              <div>
                <label
                  htmlFor="SpecialityCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Speciality Code
                </label>
                <Field
                  name="SpecialityCode"
                  as="select"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select Speciality Code</option>{" "}
                  {/* Default option */}
                  {SpecialityCode &&
                    SpecialityCode.map((item) => (
                      <option key={item._id} value={item.SpecialtyCode}>
                        {item.SpecialtyCode || "No Code Available"}{" "}
                        {/* Use fallback if value is empty */}
                      </option>
                    ))}
                </Field>

                <ErrorMessage
                  name="SpecialityCode"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white rounded-full shadow-md  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  Add Bill
                </button>
              </div>
              <ToastContainer />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddBill;
