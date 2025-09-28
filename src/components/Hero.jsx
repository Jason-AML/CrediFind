import imgHero from "../assets/img-hero.png";
export const Hero = () => {
  return (
    <section className="flex align-center justify-center bg-base-200 min-h-screen">
      <div className="flex align-center justify-center w-full gap-20 px-10">
        <div className="flex flex-col text-center w-1/2 align-center justify-center">
          <h1 className="text-5xl font-bold " style={{ color: "#013205" }}>
            Financia con nosotros!
          </h1>
          <p className="py-6 ">
            Ofrecemos soluciones rápidas, seguras y adaptadas a tus necesidades
            para que cumplas tus metas personales o empresariales sin
            complicaciones. Nuestro compromiso es brindarte transparencia,
            confianza y un acompañamiento constante durante todo el proceso. Con
            nosotros podrás acceder a planes flexibles de pago, tasas
            competitivas y la tranquilidad de estar respaldado por un equipo que
            piensa en tu futuro. Haz realidad tus proyectos hoy mismo y crece de
            la mano de quienes creen en ti.
          </p>
          <button
            className="btn w-[200px] mx-auto text-white hover:scale-105 transition-all duration-400"
            style={{ backgroundColor: "#09dc06" }}
          >
            Solicita Informacion
          </button>
        </div>
        <div className="flex flex-col text-center w-[1/2] align-center justify-center">
          <img src={imgHero} alt="" />
        </div>
      </div>
    </section>
  );
};
