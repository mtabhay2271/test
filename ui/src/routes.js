import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "./components/loader";
import AdminLayout from "./layouts/AdminLayout";

// import GuestGuard from "./components/Auth/GuestGuard";
import AuthGuard from "./components/Auth/Guard";
// import AuthGuard from "./components/Auth/AuthGuard";


export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={route + i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    // guard: GuestGuard,
    path: "/auth/signin",
    component: lazy(() => import("./views/auth/SignIn")),
  },
  {
    exact: true,
    // guard: GuestGuard,
    path: "/auth/signup",
    component: lazy(() => import("./views/auth/Signup")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/errors/NotFound404")),
  },
  {
    path: "*",
    layout: AdminLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: "/users",
        component: lazy(() => import("./views/users/list")),
      },
      {
        exact: true,
        path: "/profile",
        component: lazy(() => import("./views/users/details")),
      },
      {
        path: "*",
        exact: true,
        component: lazy(() => import("./views/errors/NotFound404")),
      },
    ],
  },
];

export default routes;
