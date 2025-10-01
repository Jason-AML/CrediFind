export const ProfitCard = ({ data }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm justify-between">
      <div className="card-body flex flex-col justify-between h-full">
        <div className=" ">
          <h2 className="text-3xl font-bold" style={{ color: "#3d3d3d" }}>
            {data.title}
          </h2>
          <span className="text-xl font-bold" style={{ color: "#FFC93A" }}>
            {data.price}
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {data.profits.map((item, index) => (
            <li key={index} className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className="btn btn-block"
            style={{ backgroundColor: "#09DC06" }}
          >
            Empieza hoy!
          </button>
        </div>
      </div>
    </div>
  );
};
