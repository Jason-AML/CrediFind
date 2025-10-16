import { Navigate } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  return user ? children : <Navigate to="/" />;
};
