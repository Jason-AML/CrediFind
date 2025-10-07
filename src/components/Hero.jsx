import imgHero from "../assets/img-hero.png";

import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="flex align-center justify-center  min-h-screen w-full ">
      <div className="flex align-center justify-center w-full gap-20 px-10 ">
        <div className="flex flex-col text-center w-1/2 align-center justify-center">
          {/*Hero title */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="text-5xl font-bold "
            style={{ color: "#013205" }}
          >
            Financia con nosotros!
          </motion.h1>
          {/*Hero description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="py-6 "
          >
            Ofrecemos soluciones rápidas, seguras y adaptadas a tus necesidades
            para que cumplas tus metas personales o empresariales sin
            complicaciones. Nuestro compromiso es brindarte transparencia,
            confianza y un acompañamiento constante durante todo el proceso. Con
            nosotros podrás acceder a planes flexibles de pago, tasas
            competitivas y la tranquilidad de estar respaldado por un equipo que
            piensa en tu futuro. Haz realidad tus proyectos hoy mismo y crece de
            la mano de quienes creen en ti.
          </motion.p>
          {/*Boton solicitar informacion */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="btn w-[200px] mx-auto text-white hover:scale-105 "
            style={{ backgroundColor: "#09dc06" }}
          >
            Solicita Informacion
          </motion.button>
        </div>
        {/*Imagen Hero */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className=" flex-col text-center w-[1/2] align-center justify-center hidden lg:flex "
          iu
        >
          <img src={imgHero} alt="" />
        </motion.div>
      </div>
    </section>
  );
};
