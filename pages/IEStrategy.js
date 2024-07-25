import Link from "next/link";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const IEStrategy = () => {
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
                Strategy & Transformation Services
              </h1>
              <div className="text-slate-500 text-md">
                Strategic guidance that goes beyond conventional consulting,
                providing solutions designed to transform organizations by
                aligning with their unique goals, enhancing their vision, and
                accelerating growth trajectories.
              </div>
            </section>
          </section>

          {/* content */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[32px]">
              Tailored Solutions for Business Transformation
            </h1>
            <div className="text-slate-600 text-xl">
              Experience the difference for yourself and unlock the potential of
              your organization with our transformative solutions.
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/dfv1gJG/st-1.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Tech Executive Advisory</h1>
                <div className="text-slate-400 text-sm">
                  Our TEA provides innovative and valuable, targeted audiences
                  to tech or business executives through a series of coaching
                  sessions on how to bridge the gap between tech projects and
                  business objectives.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/Zc6ksvn/strategy-transformation-2.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Technology Transformation</h1>
                <div className="text-slate-400 text-sm">
                  Apply our expertise on the latest in software development,
                  cloud technologies, and cybersecurity towards re-aligning your
                  technology stack towards your goals.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/FDZ2WFd/st-3.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">
                  CTO and Tech Leadership On Demand
                </h1>
                <div className="text-slate-400 text-sm">
                  CTO on Demand is a service that provides you with a seasoned
                  chief technology officer (CTO) for your project or business.
                  Whether you need strategic guidance, technical leadership, or
                  hands-on implementation, our CTOs can help you achieve your
                  goals faster and more efficiently.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/m6bHzQb/st-4.png"
                  className="h-[1000%] mb-4"
                ></img>
                <h1 className="text-[20px]">Technical Gap Analysis</h1>
                <div className="text-slate-400 text-sm">
                  Identify the fundamental weak points in your current
                  organizational structure. From technical limitations to
                  resource alignment, optimize your company towards rapidly
                  capitalizing on untapped opportunities in your organization.
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

export default IEStrategy;
