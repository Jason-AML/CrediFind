import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth"; // Asegúrate de que esta ruta sea correcta

// 1. Crear el contexto
const AuthContext = createContext();

// 2. Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// 3. Hook para consumir el contexto fácilmente
export const useAuthContext = () => useContext(AuthContext);
