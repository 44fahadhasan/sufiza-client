import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NavigateScrollToTop from "../loader/NavigateScrollToTop";
import TopLoadingBar from "../loader/TopLoadingBar";
import ErrorPage from "../pages/commonPages/ErrorPage";

// lazy load route pages
const HomePage = lazy(() => import("../pages/mainPages/HomePage"));
const AboutPage = lazy(() => import("../pages/mainPages/AboutPage"));
const ServicesPage = lazy(() => import("../pages/mainPages/ServicesPage"));

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: (
      <>
        <MainLayout />

        {/* scroll to top on every route navigate */}
        <NavigateScrollToTop />
      </>
    ),

    errorElement: <ErrorPage />,
    children: [
      // public routes
      {
        index: true,
        element: (
          <Suspense fallback={<TopLoadingBar />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<TopLoadingBar />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<TopLoadingBar />}>
            <ServicesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
