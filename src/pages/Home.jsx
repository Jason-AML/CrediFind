import { Hero } from "../components/hero/Hero.jsx";
import { Navbar } from "../components/navbar/Navbar.jsx";
import { ProfitList } from "../components/ProfitList";
import { ServiceList } from "../components/ServiceList";
import { Requeriments } from "../components/Requeriments";
import { Footer } from "../components/footer/Footer.jsx";
import services from "../data/services.js";
import beneficios from "../data/profits";
export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceList data={services} />
        <ProfitList data={beneficios} />
        <Requeriments />
      </main>
      <Footer />
    </>
  );
};
