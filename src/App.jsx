import { RouterProvider } from "react-router-dom";
import PrelineReinitializationHelper from "./components/shared/PrelineReinitializationHelper";
import routes from "./routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <PrelineReinitializationHelper />
      </RouterProvider>
    </>
  );
}

export default App;
