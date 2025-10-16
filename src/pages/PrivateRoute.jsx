import { Navigate } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Cargando...</div>;
  return user ? children : <Navigate to="/" />;
};
