import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Servicios } from "../pages/Servicios";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/servicios/:id" element={<Servicios />} />
        <Route path="*" element={<h1>404 Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
};
