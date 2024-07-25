import Link from "next/link";
import { AltArrowDown, Buildings, Chart, Star2, Sun } from "solar-icon-set";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import LogoCarousel from "./components/LogoCarousel";

const LandingPage = () => {
  return (
    <div className="bg-white" id="">
      {/* header */}
      <Header />

      {/* hero section */}
      <main className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
        <section id="smcontainer" className="flex flex-col items-center px-4">
          <img
            src="./img1.png"
            alt="bgimage"
            className="absolute top-0 right-0 w-40 md:w-auto h-[40%] md:h-[80%] object-cover z-0"
          />
          <div
            id="container"
            className="relative font-black text-4xl sm:text-[40px] md:text-[64px] text-center mt-10 md:mt-20 mb-10 md:mb-20 px-4"
          >
            Innovation Engineering for Business Needs.
          </div>
          <div
            className="text-center text-sm sm:text-lg md:text-xl text-slate-500"
            id="container"
          >
            Nematix is an advanced Innovation Engineering firm. Our team of
            skilled experts in engineering, design, and research ensures
            top-notch solutions tailored to exceed your expectations.
          </div>
          <button className="relative z-10 mt-8 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-4">
            Talk to us
          </button>
        </section>
      </main>

      {/* logo carousel */}
      <LogoCarousel />

      {/* our capabilities */}
      <section
        id="smcontainer"
        className="flex flex-col items-center my-10 sm:my-20 px-4"
      >
        <div className="text-center text-orange-400 text-base sm:text-lg">
          OUR CAPABILITIES
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl">
          How Can Innovation Engineering Help You?
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div
            id="card1"
            className="flex flex-col p-4 sm:p-8 border rounded-2xl shadow-xl shadow-orange-100 space-y-2"
          >
            <h3 className="text-lg font-bold mb-2">Expert Onboarding</h3>
            <div className="flex-grow text-start text-slate-400 text-sm sm:text-base">
              Becoming an extension to the existing team in executing the
              transformation process. We take on complex tasks in product
              delivery and work alongside your team for a successful
              transformation.
            </div>
          </div>
          <div
            id="card1"
            className="flex flex-col p-4 sm:p-8 border rounded-2xl shadow-xl shadow-orange-100 space-y-2"
          >
            <h3 className="text-lg font-bold mb-2">Strategy & Tactical Plan</h3>
            <div className="flex-grow text-start text-slate-400 text-sm sm:text-base">
              We provide a structured process using most relevant tools with
              company scenarios that generate, develop, and implement innovative
              ideas tailored to your specific needs.
            </div>
          </div>
          <div
            id="card1"
            className="flex flex-col p-4 sm:p-8 border rounded-2xl shadow-xl shadow-orange-100 space-y-2"
          >
            <h3 className="text-lg font-bold mb-2">Sustainability</h3>
            <div className="flex-grow text-start text-slate-400 text-sm sm:text-base">
              We are prioritizing sustainability and will incorporate a
              comprehensive sustainability plan into our product delivery
              process.
            </div>
          </div>
        </section>
      </section>

      {/* our services */}
      <section
        id="smcontainer"
        className="flex flex-col items-center my-10 sm:my-20 px-4"
      >
        <section
          id="smcontainer"
          className="flex flex-col items-center space-y-8"
        >
          <img
            src="./illustration@2x.png"
            alt="bgimage"
            className="absolute top-120 left-0 w-auto h-[40%] md:h-[80%] object-cover z-0"
          />
          <div className="text-orange-400 text-base sm:text-lg">
            OUR SERVICES
          </div>
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl">
            Innovation Engineering Services
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <Link href="/IEStrategy">
              <div
                id="card2"
                className="flex flex-col items-center space-y-4 p-4 md:p-8"
              >
                <div className="px-6 py-6 border border-solid border-orange-400 rounded-full bg-white">
                  <Buildings color="black" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-center text-base sm:text-lg">
                  Strategy & Transformation
                </h4>
              </div>
            </Link>

            <Link href="/IEIPD">
              <div
                id="card2"
                className="flex flex-col items-center space-y-4 p-4 md:p-8"
              >
                <div className="px-6 py-6 border border-solid border-orange-400 rounded-full bg-white">
                  <Sun color="black" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-center text-base sm:text-lg">
                  Innovation & Product Development
                </h4>
              </div>
            </Link>

            <Link href="/IEData">
              <div
                id="card2"
                className="flex flex-col items-center space-y-4 p-4 md:p-8"
              >
                <div className="px-6 py-6 border border-solid border-orange-400 rounded-full bg-white">
                  <Chart color="black" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-center text-base sm:text-lg">
                  Data Intelligence Services
                </h4>
              </div>
            </Link>

            <Link href="/IEAAS">
              <div
                id="card2"
                className="flex flex-col items-center space-y-4 p-4 md:p-8"
              >
                <div className="px-6 py-6 border border-solid border-orange-400 rounded-full bg-white">
                  <Star2 color="black" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-center text-base sm:text-lg">
                  Expertise as A Services
                </h4>
              </div>
            </Link>
          </section>
        </section>
      </section>

      {/* contact us */}
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
