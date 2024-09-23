import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../Api/axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function EditRationale() {
  const { rationalId } = useParams();
  const [rationaleData, setRationaleData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/getRationale/${rationalId}`);
        setRationaleData(response.data.rationaleData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [rationalId]); 

  if (!rationaleData) {
    return <div><Loader/></div>;
  }

  return (
    <Formik
      initialValues={{
        module: rationaleData.Module || "Medical Review",
        rationaleSummary: rationaleData.RationaleSummary || "",
        rationaleText: rationaleData.RationaleText || "",
        rationaleID: rationaleData._id || "", 
        enable: rationaleData.Enable || "1",
        groupID: rationaleData.GroupID || "",
        sequence: rationaleData.Sequence || "",
      }}
      enableReinitialize 
      onSubmit={async (values, { resetForm }) => {
        try {
          await axiosInstance.put(`/editRationale/${rationaleData._id}`, values); 
          resetForm()
          toast.success("Successfully edited Rationale");
          navigate('/user/show-rationale')
        } catch (error) {
          console.error("Error submitting form", error);
          toast.error("Error editing Rationale");
        }
      }}
    >
      {() => (
        <Form className="max-w-lg mx-auto">
          <h1 className="text-center font-bold text-[3vw] sm:text-xl mb-4">
            Edit Rationale
          </h1>

          {/* Module Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 ">Module</label>
            <div className="w-full">
              <ErrorMessage
                name="module"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="module"
                name="module"
                placeholder="Module"
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
          </div>

          {/* Rationale Summary Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 ">Rationale Summary</label>
            <div className="w-full">
              <ErrorMessage
                name="rationaleSummary"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="rationaleSummary"
                name="rationaleSummary"
                placeholder="Rationale Summary"
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
          </div>

          {/* Rationale Text Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12">Rationale Text</label>
            <div className="w-full">
              <ErrorMessage
                name="rationaleText"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="rationaleText"
                name="rationaleText"
                placeholder="Rationale Text"
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
          </div>

          {/* Enable Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12">Enable</label>
            <div className="w-full">
              <ErrorMessage
                name="enable"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <div className="flex gap-4 items-center mt-2">
                {/* Active Checkbox */}
                <label className="flex items-center">
                  <Field
                    type="radio"
                    id="active"
                    name="enable"
                    value="1"
                    className="mr-2"
                  />
                  Active
                </label>
                {/* Not Active Checkbox */}
                <label className="flex items-center">
                  <Field
                    type="radio"
                    id="notActive"
                    name="enable"
                    value="0"
                    className="mr-2"
                  />
                  Not Active
                </label>
              </div>
            </div>
          </div>

          {/* Group ID Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 ">Group ID</label>
            <div className="w-full">
              <ErrorMessage
                name="groupID"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="groupID"
                name="groupID"
                placeholder="Group ID"
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
          </div>

          {/* Sequence Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 ">Sequence</label>
            <div className="w-full ">
              <ErrorMessage
                name="sequence"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="sequence"
                name="sequence"
                placeholder="Sequence"
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-black text-white rounded"
          >
            Save
          </button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

export default EditRationale;
