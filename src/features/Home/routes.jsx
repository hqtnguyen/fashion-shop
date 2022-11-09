import { lazy } from "react";

const path = "/home";

const homeRoutes = {
  key: "home",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./components/HomeContent")),
};
export default homeRoutes;
