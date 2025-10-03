import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { ProfitList } from "../components/ProfitList";
import { ServiceList } from "../components/ServiceList";
import { Requeriments } from "../components/Requeriments";
import { Footer } from "../components/Footer";
import services from "../data/services.js";
import beneficios from "../data/profits";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceList data={services} />
      <ProfitList data={beneficios} />
      <Requeriments />
      <Footer />
    </>
  );
};
