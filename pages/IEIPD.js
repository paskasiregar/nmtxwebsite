import Link from "next/link";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const IEIPD = () => {
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
                Innovation & Product Development
              </h1>
              <div className="text-slate-500 text-md">
                We help you transform your organization by aligning with your
                vision, goals, and growth potential. Whether you need to
                innovate, develop, or launch new products, we have the expertise
                and experience to guide you through every step of the process.
              </div>
            </section>
          </section>

          {/* content */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[32px]">Empowering Organizational Evolution</h1>
            <div className="text-slate-600 text-xl">
              Join us today to experience firsthand how our tailored solutions
              can propel your organization forward, from conceptualization to
              launch and beyond.
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/DDKQLMg/ipd-1-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">Custom Software Engineering</h1>
                <div className="text-slate-400 text-sm">
                  From mobile applications to cloud-native implementations, we
                  bring your unique ideas to life with well-design, scalable
                  software solutions.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/PwYL1w1/ipd-2-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">MVP Software Development</h1>
                <div className="text-slate-400 text-sm">
                  Accelerate your idea to market with an MVP; from expertly
                  crafted UX screen designs to functional prototypes.
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
                  src="https://i.ibb.co.com/kgMKQvx/ipd-3-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">Cloud Native Development</h1>
                <div className="text-slate-400 text-sm">
                  Cloud native development is the future of software
                  engineering. We help you design, build, and deploy scalable
                  and resilient applications that leverage the power of the
                  cloud. Whether you need to modernize your legacy systems,
                  migrate to a new platform, or create a new product from
                  scratch, we have the expertise and tools to make it happen.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/RgX251d/ipd-4-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">Legacy Modernization</h1>
                <div className="text-slate-400 text-sm">
                  Legacy system modernization is a service that transforms
                  outdated and inefficient systems into modern and agile ones.
                  It improves performance, security, scalability and user
                  experience. It also reduces maintenance costs and risks.
                </div>
              </div>

              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/MhszfXJ/ipd-5-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">
                  Hardware Prototyping with FabLab
                </h1>
                <div className="text-slate-600 text-sm">
                  Our FabLab offers an innovative hardware prototyping approach
                  with a long-term DFM strategy. We help customers maximize
                  their R&D funding for efficient output.
                </div>
              </div>
              {/* individual card */}
              <div
                className="flex flex-col p-4 border rounded-xl shadow-lg"
                id="card3"
              >
                <img
                  src="https://i.ibb.co.com/MgtFP9b/ipd-6-1.png"
                  className="h-[100%] mb-4"
                ></img>
                <h1 className="text-[20px]">UI/UX Design Development</h1>
                <div className="text-slate-400 text-sm">
                  We design and develop user interfaces and experiences that are
                  engaging, intuitive and effective. Our team of experts can
                  help you create a digital product that meets your goals and
                  satisfies your users.
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

export default IEIPD;
