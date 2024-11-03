import "preline/preline";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PrelineReinitializationHelper = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return null;
};

export default PrelineReinitializationHelper;
