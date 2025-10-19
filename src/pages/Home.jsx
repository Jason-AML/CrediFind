import { Helmet } from "react-helmet";
import { Hero } from "../components/hero/Hero.jsx";
import { ProfitList } from "../components/ProfitList";
import { ServiceList } from "../components/ServiceList";
import { Requeriments } from "../components/Requeriments";
import services from "../data/services.js";
import beneficios from "../data/profits";
import { Layout } from "../components/layout/Layout.jsx";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>CrediFind</title>
        <meta
          name="description"
          content="Creditos Personales, Empresariales y consolidacion de dudas "
        />
        <meta name="author" content="CrediFind" />
        <meta name="robots" content="index, follow" />

        {/*  Open Graph */}
        <meta
          property="og:title"
          content="CrediFind | Creditos a tasas bajas"
        />
        <meta
          property="og:description"
          content="Simula y solicita creditos para acercarte a tus sueños con nosotros!"
        />
        <meta
          property="og:image"
          content="https://jason-aml.github.io/CrediFind/preview.png"
        />
        <meta
          property="og:url"
          content="https://jason-aml.github.io/CrediFind/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Credifind" />

        {/*  Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jeisson Monza | Desarrollador Web Full Stack"
        />
        <meta
          name="twitter:description"
          content="Explora mis proyectos y servicios de desarrollo web con React y Node.js."
        />
        <meta
          name="twitter:image"
          content="https://tu-dominio.com/preview.jpg"
        />
      </Helmet>

      <Layout>
        <Hero />
        <ServiceList data={services} />
        <ProfitList data={beneficios} />
        <Requeriments />
      </Layout>
    </>
  );
};
