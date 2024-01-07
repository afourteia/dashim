import AppLayout from "@/features/layout/AppLayout";
import Login from "@/features/auth/login";
import { RootRoute, Route, Router } from "@tanstack/react-router";
import Subscribers from "@/features/subscribers/subscribers";
import Home from "@/features/home/Home";

const rootRoute = new RootRoute({
  component: AppLayout,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const subscribersRoute = new Route({
  getParentRoute: () => indexRoute,
  path: "/subscribers",
  component: Subscribers,
});

const login = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([subscribersRoute]),
  login,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
