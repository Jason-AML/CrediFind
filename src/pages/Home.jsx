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
      <Layout>
        <Hero />
        <ServiceList data={services} />
        <ProfitList data={beneficios} />
        <Requeriments />
      </Layout>
    </>
  );
};
