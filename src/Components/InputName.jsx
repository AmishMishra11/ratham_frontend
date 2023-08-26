import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserName } from "../Redux/Features/userSlice";

function InputName(props) {
  const dispatch = useDispatch();

  const [tempName, setTempName] = useState("");

  const [showInput, setShowInput] = useState(true);
  const handleNameChange = (text) => {
    setTempName(text);
  };

  const handleKeyDown = (event) => {
    if (tempName.length)
      if (event.key === "Enter") {
        dispatch(addUserName(tempName));
        localStorage.setItem("name", tempName);
        setTempName("");
        setShowInput(false);
        props.actionProvider.handleEnterNameAndAskAge();
      }
  };
  return (
    <div>
      <input
        style={{ display: showInput ? "block" : "none" }}
        placeholder="Name"
        value={tempName}
        onChange={(e) => handleNameChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputName;
