import "./App.css";
import { AuthProvider } from "./components/auth/AuthContext";
import { Routers } from "./routes/Routers";

function App() {
  return (
    <>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  );
}

export default App;
