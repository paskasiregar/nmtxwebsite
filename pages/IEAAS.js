import Link from "next/link";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const IEAAS = () => {
  return (
    <div>
      <Header />
      <img
        src="./img1.png"
        alt="bgimage"
        className="absolute top-20 right-0 w-auto h-[80%] object-cover z-0"
      />
      <div id="smcontainer">
        <div className="w-full relative bg-absolute-white text-left text-2xl text-dark-dark-900 font-semi-bold-semi-bold-6">
          {/* header */}
          <section className="flex flex-col items-center my-20">
            <section className="flex flex-col items-center space-y-8">
              <div className="text-slate-600 text-8xl">
                Our Innovation Engineering Services
              </div>
              <h1 className="text-[48px] flex items-center justify-center">
                Expertise as A Service
              </h1>
              <div className="text-slate-500 text-md">
                Our solutions are tailored to your specific goals, vision, and
                growth potential. We have the expertise and experience to help
                you achieve your desired outcomes and gain a competitive edge in
                your industry.
              </div>
            </section>
          </section>

          {/* content */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[32px]">
              Tailored Solutions for Unleashing Your Competitive Edge
            </h1>
            <div className="text-slate-600 text-xl">
              Unlock your organization's full potential by experiencing our
              tailored solutions firsthand - join us and gain the competitive
              edge your business deserves
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/Wt5540L/eaas-2-1.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">
                  CTO and Tech Leadership On Demand
                </h1>
                <div className="text-slate-400 text-sm">
                  We provide on-demand CTO and tech leadership services for
                  startups and enterprises. Whether you need strategic guidance,
                  technical expertise, or team management, we can help you
                  achieve your goals with confidence and efficiency.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/cbmYMKM/st-5.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">
                  Team Extension of Staff Augmentation
                </h1>
                <div className="text-slate-400 text-sm">
                  Our team extension and staff augmentation services provide you
                  with the best talent for your projects. Whether you need
                  developers, designers, testers, or managers, we can find and
                  hire them for you. You get full control over the team, while
                  we handle the administrative and operational aspects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IEAAS;
