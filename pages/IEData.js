import Link from "next/link";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const IEData = () => {
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
                Data Intelligence Services
              </h1>
              <div className="text-slate-500 text-md">
                A strategic partner that helps you leverage data to achieve your
                objectives, enhance your vision, and accelerate your growth. We
                offer more than conventional consulting: we provide tailored
                solutions that transform your organization with data-driven
                insights and actions.
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
                  src="https://i.ibb.co.com/XZz9smK/di-1.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">
                  ChatGPT Consulting & Development
                </h1>
                <div className="text-slate-400 text-sm">
                  Utilize the world's leading large language model ChatGPT and
                  enable its myriad of application for your business offering
                  and operations.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/kStjf81/di-2.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Data Strategy</h1>
                <div className="text-slate-400 text-sm">
                  Create long-term success and value through a unified data
                  strategy that connects your data silos, tech stack, and
                  business objectives.
                </div>
              </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/BTx2XTM/di-3.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Data Governance</h1>
                <div className="text-slate-400 text-sm">
                  Instill an unparallel trust in your data by increasing its
                  accuracy, security, consistency and compliance.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/BysqGpg/di-5.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Applied AI</h1>
                <div className="text-slate-400 text-sm">
                  End-to-end consulting solutions on custom AI strategy
                  development, advanced analytics, and specific industry
                  applications of AI.
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

export default IEData;
