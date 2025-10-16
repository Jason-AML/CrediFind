import { Drawer } from "../drawer/Drawer";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Drawer>{children}</Drawer>
      </main>
      <Footer />
    </>
  );
};
