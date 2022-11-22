import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalRoutes } from "./AllRoute";
import Global from "../Layout/Global";
export default function AppRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading ......</div>}>
        <Routes>
          <Route element={<Global />}>
            {globalRoutes.map((route, index) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              ></Route>
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
