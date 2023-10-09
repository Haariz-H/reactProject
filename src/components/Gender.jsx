import React, { useState } from "react";

function Gender() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const genderSetMale = () => {
    setGender("Mr. ");
  };
  const genderSetFemale = () => {
    setGender("Ms. ");
  };
  // const handleGender = (event) => {
  //   setGender(event.target.value);
  // };

  return (
    <div>
      <h1>
        Name: <input type="text" onChange={(e) => setName(e.target.value)} />
      </h1>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="male"
          onClick={genderSetMale}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Male
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="female"
          onClick={genderSetFemale}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>

      <h1>
        {gender}
        {name}
      </h1>
    </div>
  );
}

export default Gender;
// value="female"
//
