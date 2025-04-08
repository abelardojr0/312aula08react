import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LayoutAuth } from "../components/layouts/LayoutAuth";
import { Dash } from "../auth/Dash";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Page404 } from "../pages/Page404";

export const AuthRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LayoutAuth />}>
            <Route index element={<Dash />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
