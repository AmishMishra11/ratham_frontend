import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/Features/userSlice";

function Exit() {
  const { userName, userAge } = useSelector((store) => store.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUser({ userName, userAge }));
    localStorage.clear();
  }, [dispatch, userName, userAge]);

  return (
    <div className="exit-container">
      <p>
        Your name {userName} aged {userAge} has been added to student system.
        You may now exit.
      </p>
    </div>
  );
}

export default Exit;
