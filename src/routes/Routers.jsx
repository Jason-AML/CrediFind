import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Services } from "../pages/Services";

import { PrivateRoute } from "../pages/PrivateRoute";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Planes } from "../pages/Planes/Planes";
import { FormContainer } from "../components/forms/formSimulateCredit/FormContainer";

export const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/servicios/:id" element={<Services />} />
        <Route path="/form" element={<FormContainer />} />
        <Route path="/plan" element={<Planes />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h1>404 Not Found </h1>} />
      </Routes>
    </HashRouter>
  );
};
