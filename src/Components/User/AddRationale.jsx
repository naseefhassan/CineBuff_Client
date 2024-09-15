import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../Api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddRationale() {
  return (
    <Formik
      initialValues={{
        module: "Medical Review",
        rationaleSummary: "",
        rationaleText: "",
        enable: "1",
        rationaleID: "",
        groupID: "",
        sequence: "",
      }}
      validationSchema={Yup.object({
        module: Yup.string().required("Module is required"),
        rationaleSummary: Yup.string().required(
          "Rationale Summary is required"
        ),
        rationaleText: Yup.string().required("Rationale Text is required"),
        enable: Yup.string().required("Enable field is required"),
        rationaleID: Yup.string().required("Rationale ID is required"),
        groupID: Yup.string().required("Group ID is required"),
        sequence: Yup.number()
          .required("Sequence is required")
          .typeError("Sequence must be a number"),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
           await axiosInstance.post(
            "/addrationale",
            values
          );
          resetForm();
          toast.success('New Rationale added')
        } catch (error) {
          console.error("Error submitting form", error);
        }
      }}
    >
      {() => (
        <Form className="max-w-lg mx-auto">
          <h1 className="text-center font-bold text-[3vw] sm:text-xl mb-4">
            Add Rationale
          </h1>

          {/* Module Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm ">Module</label>
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
                className="w-full p-2 border-2 rounded-md text-sm text-sm"
              />
            </div>
          </div>

          {/* Rationale Summary Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm ">Rationale Summary</label>
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
                className="w-full p-2 border-2 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Rationale Text Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm">Rationale Text</label>
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
                className="w-full p-2 border-2 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Enable Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm">Enable</label>
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

          {/* Rationale ID Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm ">Rationale ID</label>
            <div className="w-full">
              <ErrorMessage
                name="rationaleID"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
              <Field
                type="text"
                id="rationaleID"
                name="rationaleID"
                placeholder="Rationale ID"
                className="w-full p-2 border-2 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Group ID Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm ">Group ID</label>
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
                className="w-full p-2 border-2 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Sequence Field */}
          <div className="sm:flex items-start gap-3 mb-3">
            <label className="w-2/12 text-sm ">Sequence</label>
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
                className="w-full p-2 border-2 rounded-md text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-black text-white rounded"
          >
            Submit
          </button>
          <ToastContainer/>
        </Form>
      )}
    </Formik>
  );
}

export default AddRationale;
