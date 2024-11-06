import "preline/preline";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/mainPages/shared/Footer";
import Header from "../pages/mainPages/shared/Header";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // preline reinitialization helper
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <div className="roboto">
      {/* header */}
      <Header />

      {/* main layout */}
      <main className="min-h-[calc(100vh-441px)] mt-[56px] bg-gray-50">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
