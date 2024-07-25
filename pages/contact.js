import Link from "next/link";
import { AltArrowDown, Buildings, Chart, Star2, Sun } from "solar-icon-set";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";

const ContactPage = () => {
  return (
    <div className="bg-white" id="">
      {/* contact us */}
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
