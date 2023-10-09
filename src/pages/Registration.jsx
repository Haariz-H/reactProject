import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form6Example3"
            className="form-control"
            name="name"
            {...register("name")}
          />
          <label className="form-label" for="form6Example3">
            Employee Name
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form6Example5"
            className="form-control"
            name="email"
            {...register("email")}
          />
          <label className="form-label" for="form6Example5">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="number"
            id="form6Example6"
            className="form-control"
            name="empNo"
            {...register("empNo")}
          />
          <label className="form-label" for="form6Example6">
            Emplyee Number
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          //   onClick={console.log}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
