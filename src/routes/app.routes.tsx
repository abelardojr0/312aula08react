import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Page404 } from "../pages/Page404";
import { LayoutUser } from "../components/layouts/LayoutUser";
import { Home } from "../pages/Home";
import { Page1 } from "../pages/Page1";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LayoutUser />}>
            <Route index element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
