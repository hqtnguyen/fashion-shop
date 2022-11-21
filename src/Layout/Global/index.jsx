import React from "react";
import { Outlet } from "react-router-dom";
import Content from "./Content";

export default function Global() {
  return (
    <div>
      <Content />
      <Outlet />
    </div>
  );
}
