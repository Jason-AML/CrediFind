import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { ProfitList } from "../components/ProfitList";
import { ServiceList } from "../components/ServiceList";
import { Requeriments } from "../components/Requeriments";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceList />
      <ProfitList />
      <Requeriments />
      <Footer />
    </>
  );
};
