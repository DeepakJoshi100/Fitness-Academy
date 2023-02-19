import { withFormik } from "formik";
import React from "react";
import Input from "./Input";
import * as Yup from "yup";

const Registration = ({
  handleSubmit,
  handleChange,
  handleBlur,
  handleFocus,
  touched,
  errors,
  values,
  isValid,
  handleReset,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 m-2"
    >
      <h1 className="font-mono text-3xl duration-300 cursor-pointer hover:text-orange-500">
        Registration Form
      </h1>
      <Input
        name="firstName"
        id="firstName"
        placeholder="First_Name"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.firstName}
        errors={errors.firstName}
        value={values.firstName}
      />

      <Input
        name="lastName"
        id="lastName"
        placeholder="Last_Name"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.lastName}
        errors={errors.lastName}
        value={values.lastName}
      />

      <Input
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.email}
        errors={errors.email}
        value={values.email}
      />

      <Input
        name="mobileNumber"
        id="mobileNumber"
        placeholder="Mobile_Number"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.mobileNumber}
        errors={errors.mobileNumber}
        value={values.mobileNumber}
      />

      <Input
        name="address"
        id="address"
        placeholder="Address"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.address}
        errors={errors.address}
        value={values.address}
      />

      <Input
        name="dateOfBirth"
        id="dateOfBirth"
        placeholder="Date_Of_Birth"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        touched={touched.dateOfBirth}
        errors={errors.dateOfBirth}
        value={values.dateOfBirth}
      />

      <div className="flex justify-end w-full gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="px-8 py-1 text-xs font-bold text-white duration-300 bg-gray-500 rounded-md hover:text-black hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-8 py-1 text-xs font-bold duration-300 bg-orange-500 rounded-md hover:text-white hover:bg-orange-600 disabled:bg-orange-200 disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    email: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    dateOfBirth: "",
  }),

  handleSubmit: (values) => {
    console.log(
      "sending data",
      values.firstName,
      values.lastName,
      values.email,
      values.mobileNumber,
      values.address,
      values.dateOfBirth
    );
  },

  validateOnMount: true,

  validationSchema: Yup.object({
    email: Yup.string().email().required("E-mail cannot be empty."),
    firstName: Yup.string().required("First_Name Required."),
    lastName: Yup.string().required("Last_Name Required."),
    mobileNumber: Yup.number()
      .min(10, "Mobile_Number cannot be less than 10 character.")
      .required("Mobile_Number required"),
    address: Yup.string().required("Address required."),
    dateOfBirth: Yup.date().required("Required Date_Of_Birth."),
  }),
})(Registration);
