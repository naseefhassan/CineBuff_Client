import { Formik, Form, Field, ErrorMessage } from "formik";
import axiosInstance from '../../Api/axios'

function AddRationale() {
  return (
    <Formik
      initialValues={{
        module: "",
        rationaleSummary: "",
        rationaleText: "",
        enable: "",
        rationaleID: "",
        groupID: "",
        sequence: "",
      }}
      onSubmit={async(values) => {
        // Handle form submission
       const response = await axiosInstance.post('/addrationale', values)
       console.log(response);
       
      }}
    >
      {() => (
        <Form className="max-w-lg mx-auto ">
          <h1 className="text-center font-bold text-[3vw] sm:text-xl mb-4">
            Add Rationale
          </h1>

          {/* Module Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Module</label>
            <Field
              type="text"
              id="module"
              name="module"
              placeholder="Module"
              className="flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="module" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Rationale Summary Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Rationale Summary</label>
            <Field
              type="text"
              id="rationaleSummary"
              name="rationaleSummary"
              placeholder="Rationale Summary"
              className="sm:flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="rationaleSummary" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Rationale Text Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Rationale Text</label>
            <Field
              type="text"
              id="rationaleText"
              name="rationaleText"
              placeholder="Rationale Text"
              className="sm:flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="rationaleText" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Enable Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Enable</label>
            <Field
              type="text"
              id="enable"
              name="enable"
              placeholder="Enable"
              className="sm:flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="enable" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Rationale ID Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Rationale ID</label>
            <Field
              type="text"
              id="rationaleID"
              name="rationaleID"
              placeholder="Rationale ID"
              className="sm:flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="rationaleID" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Group ID Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Group ID</label>
            <Field
              type="text"
              id="groupID"
              name="groupID"
              placeholder="Group ID"
              className="sm:flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="groupID" component="div" className="error text-red-600 text-sm" />
          </div>

          {/* Sequence Field */}
          <div className="sm:flex items-center gap-3 mb-3">
            <label className="w-2/12  pr-3">Sequence</label>
            <Field
              type="number"
              id="sequence"
              name="sequence"
              placeholder="Sequence"
              className="flex-1 p-2 border-2 rounded-md"
            />
            <ErrorMessage name="sequence" component="div" className="error text-red-600 text-sm" />
          </div>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-black text-white rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AddRationale;
