import { lazy } from "react";

const path = "/login";

const loginRoutes = {
  key: "login",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./components/LoginContent")),
};
export default loginRoutes;
