import React, { useState } from "react";

function Employe() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    empNo: "",
  });
  const inputHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };
  return (
    <div>
      <form className="my-5" onSubmit={onSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form6Example3"
            className="form-control"
            name="name"
            onChange={inputHandler}
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
            onChange={inputHandler}
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
            onChange={inputHandler}
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

export default Employe;
