import { useLocation } from "react-router-dom";

export const Planes = () => {
  const location = useLocation();
  const planData = location.state?.plan;
  return (
    <div className="h-screen bg-amber-300 text-black p-6">
      <h1 className="text-3xl font-bold mb-4">Planes</h1>

      {planData ? (
        <>
          <p className="text-xl">
            Has seleccionado el plan: <strong>{planData.title}</strong>
          </p>
          <p>{planData.desc}</p>
        </>
      ) : (
        <p className="text-xl text-red-600">
          No se ha seleccionado ningún plan.
        </p>
      )}
    </div>
  );
};
