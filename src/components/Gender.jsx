import React, { useState } from "react";

function Gender() {
  const [gender, setGender] = useState("");
  const genderSet = () => {
    setGender("Male");
  };

  return (
    <div>
      <h1>{gender}</h1>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="male"
          onChange={genderSet}
        />
        <label class="form-check-label" for="flexRadioDefault1">
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
          onChange={(e) => setGender(e.target.value)}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>
    </div>
  );
}

export default Gender;
// value="female"
//
