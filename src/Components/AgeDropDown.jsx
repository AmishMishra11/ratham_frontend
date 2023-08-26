import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserAge } from "../Redux/Features/userSlice";

function AgeDropDown(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tempAge, setTempAge] = useState(0);

  const [showOptions, setShowOptions] = useState(true);

  const tempArr = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40,
  ];

  const onChangeHandler = (age) => {
    setTempAge(age);
    dispatch(addUserAge(age));
    localStorage.setItem("age", age);
    props.actionProvider.hanleEnterAgeAndExit();
    setShowOptions(false);
    setTimeout(() => {
      navigate("/exit");
    }, 5000);
  };
  return (
    <div
      className="option-container"
      style={{ display: showOptions ? "block" : "none" }}
    >
      <label>Enter your Age</label>
      <select
        value={tempAge}
        name="tempAge"
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {tempArr.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AgeDropDown;
