import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { decrement, increment } from "../HomeSlice";
export default function HomeView() {
  const value = useSelector((state) => state.home.count);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment(10));
  };

  const handleDec = () => {
    dispatch(decrement());
  };
  console.log(value);
  return (
    <div>
      <p>Redux Count: {value}</p>
      <button onClick={handleInc}>Tang</button>
      <button onClick={handleDec}>Giam</button>
      <button
        onClick={() => {
          message.success("Mua hang thanh cong");
        }}
      >
        Mua hang
      </button>
    </div>
  );
}
