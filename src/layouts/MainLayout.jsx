import { Outlet } from "react-router-dom";
import Footer from "../pages/mainPages/shared/Footer";
import Header from "../pages/mainPages/shared/Header";

const MainLayout = () => {
  return (
    <div className="roboto">
      {/* header */}
      <Header />

      {/* main layout */}
      <main className="min-h-[calc(100vh-441px)] mt-[56px]">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
