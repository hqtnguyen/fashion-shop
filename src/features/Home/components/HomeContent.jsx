import React from "react";
import { Link } from "react-router-dom";

export default function HomeContent() {
  return (
    <div>
      <p>Đây là Home Content</p>
      <Link to={"/"}>Link to /</Link>
    </div>
  );
}
