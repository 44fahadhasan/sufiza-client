import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/commonPages/ErrorPage";

// lazy load route pages
const HomePage = lazy(() => import("../pages/mainPages/HomePage"));

const AboutPage = lazy(() => import("../pages/mainPages/AboutPage"));

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
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={null}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
