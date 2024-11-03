import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/commonPages/ErrorPage";

// lazy load route pages
const HomePage = lazy(() => import("../pages/mainPages/HomePage"));

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // public routes
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <HomePage />,
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
