import {
  AltArrowDown,
  Buildings,
  Chart,
  CodeSquare,
  CupFirst,
  MagicStick3,
  MaximizeSquare2,
  Star2,
  Sun,
} from "solar-icon-set";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const company = () => {
  return (
    <div className="bg-white relative">
      {/* header */}
      <Header />

      {/* hero section */}
      <main className="h-full">
        <div className="relative flex flex-col items-start justify-center mb-20">
          <img
            src="./img1.png"
            alt="bgimage"
            className="absolute top-0 right-0 w-[400px] h-auto object-cover z-0"
          />
          <div
            className="relative z-10 flex flex-col items-center p-8 max-w-2xl mx-auto"
            id="smcontainer"
          >
            <h1 className="flex font-bold text-[52px] text-center text-black">
              Shaping the Future with Innovation Engineering
            </h1>
            <p className="flex mt-4 text-center text-slate-600">
              The company employs a team of highly skilled experts in
              engineering, design, and research who possess a wealth of
              knowledge and experience in their respective fields. Whether it's
              developing new products or refining existing ones, Nematix is
              committed to providing its clients with top-notch solutions that
              meet their business needs and exceed their expectations.
            </p>
            <div className="flex justify-start mt-8">
              <button className="relative z-10 mt-8">Get Started</button>
            </div>
          </div>
        </div>
      </main>

      {/* ie services */}
      <section id="smcontainer" className="flex flex-col items-center mb-16">
        <h2 className="text-start w-full mt-12 mb-4 text-8xl">
          Our Innovation Engineering Service
        </h2>
        <div className="text-start mb-8">
          Our comprehensive Innovation Engineering & Consultation flexible
          approach to problem-solving involves becoming a part of your team and
          executing the transformation.
        </div>
        <section className="grid grid-cols-2 gap-8 h-full max-w-5xl">
          <div
            id="card2"
            className="flex flex-col p-4 border rounded-2xl shadow-xl shadow-orange-100 h-full"
          >
            <h3 className="text-md text-start font-bold mb-2 flex items-center">
              <MaximizeSquare2 color="black" size={20} iconStyle="Bold" />
              <span className="ml-2">Strategy & Transformation Services</span>
            </h3>
            <div className="flex-grow text-start text-slate-400 text-sm">
              Strategic guidance that goes beyond conventional consulting,
              providing solutions designed to transform organizations by
              aligning with their unique goals, enhancing their vision, and
              accelerating growth trajectories.
            </div>
          </div>

          <div
            id="card2"
            className="flex flex-col p-4 border rounded-2xl shadow-xl shadow-orange-100 h-full"
          >
            <h3 className="text-md text-start font-bold mb-2 flex items-center">
              <MagicStick3 color="black" size={20} iconStyle="Bold" />
              <span className="ml-2">Expertise as a Services</span>
            </h3>
            <div className="flex-grow text-start text-slate-400 text-sm">
              Our solutions are tailored to your specific goals, vision, and
              growth potential. We have the expertise and experience to help you
              achieve your desired outcomes and gain a competitive edge in your
              industry.
            </div>
          </div>
          <div
            id="card2"
            className="flex flex-col p-4 border rounded-2xl shadow-xl shadow-orange-100 h-full"
          >
            <h3 className="text-md text-start font-bold mb-2 flex items-center">
              <CupFirst color="black" size={20} iconStyle="Bold" />
              <span className="ml-2">Innovation & Product Development</span>
            </h3>
            <div className="flex-grow text-start text-slate-400 text-sm">
              We help you transform your organization by aligning with your
              vision, goals, and growth potential. Whether you need to innovate,
              develop, or launch new products, we have the expertise and
              experience to guide you through every step of the process.
            </div>
          </div>
          <div
            id="card2"
            className="flex flex-col p-4 border rounded-2xl shadow-xl shadow-orange-100 h-full"
          >
            <h3 className="text-md text-start font-bold mb-2 flex items-center">
              <CodeSquare color="black" size={20} iconStyle="Bold" />
              <span className="ml-2">Data Intelligence Services</span>
            </h3>
            <div className="flex-grow text-start text-slate-400 text-sm">
              A strategic partner that helps you leverage data to achieve your
              objectives, enhance your vision, and accelerate your growth. We
              offer more than conventional consulting: we provide tailored
              solutions that transform your organization with data-driven
              insights and actions.
            </div>
          </div>
        </section>
      </section>

      {/* our values */}
      <section id="smcontainer" className="flex flex-col items-center mb-16">
        <h2 className="text-start w-full mt-12 mb-4 text-8xl">Our Values</h2>
        <div className="text-start mb-8">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </div>
        <section className="grid grid-cols-2 gap-8">
          <div
            id="card3"
            className="flex items-start p-2 border border-orange-400 rounded-xl shadow-md"
          >
            <div className="p-2 border border-orange-400 rounded-full bg-white mr-2 flex-shrink-0">
              <Buildings color="black" size={32} iconStyle="Bold" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-left">Trust</h4>
              <div className="text-slate-400 text-sm text-left">
                Trust is the cornerstone of every successful real estate
                transaction.
              </div>
            </div>
          </div>
          <div
            id="card3"
            className="flex items-start p-2 border border-orange-400 rounded-xl shadow-md"
          >
            <div className="p-2 border border-orange-400 rounded-full bg-white mr-2 flex-shrink-0">
              <Sun color="black" size={32} iconStyle="Bold" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-left">
                Client-Centric
              </h4>
              <div className="text-slate-400 text-sm text-left">
                Your dreams and needs are at the center of our universe. We
                listen, understand.
              </div>
            </div>
          </div>
          <div
            id="card3"
            className="flex items-start p-2 border border-orange-400 rounded-xl shadow-md"
          >
            <div className="p-2 border border-orange-400 rounded-full bg-white mr-2 flex-shrink-0">
              <Chart color="black" size={32} iconStyle="Bold" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-left">Excellence</h4>
              <div className="text-slate-400 text-sm text-left">
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </div>
            </div>
          </div>
          <div
            id="card3"
            className="flex items-start p-2 border border-orange-400 rounded-xl shadow-md"
          >
            <div className="p-2 border border-orange-400 rounded-full bg-white mr-2 flex-shrink-0">
              <Star2 color="black" size={32} iconStyle="Bold" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-left">
                Our Commitment
              </h4>
              <div className="text-slate-400 text-sm text-left">
                We are dedicated to providing you with the highest level of
                service, professionalism.
              </div>
            </div>
          </div>
        </section>
      </section>
      <img
        src="./illustration@2x.png"
        alt="bgimage"
        className="absolute top-120 left-0 w-auto h-[20%] object-cover z-0"
      />

      {/* past exp */}
      <section id="smcontainer" className="flex flex-col items-center mb-16">
        <h2 className="text-start w-full mt-12 mb-4 text-8xl">
          Past Experience
        </h2>
        <div className="text-start mb-8">
          We have extensive experience collaborating with numerous organizations
          to successfully address their technical and operational challenges
          from both a technical and engineering standpoint.
        </div>
        <section className="grid grid-cols-3 items-center gap-4">
          <div id="card2" className="flex flex-col items-center space-y-4">
            <div className="px-6 py-6 bg-white">
              <Sun color="black" size={32} iconStyle="Bold" />
            </div>
            <h4 className="flex-grow">Industry Partnerships</h4>
            <div className="text-left text-sm text-slate-400">
              Collaborated with leading insurance marketplaces like PolicyStreet
              and partnered with innovative tech solutions providers such as
              bolttech.
            </div>
          </div>
          <div id="card2" className="flex flex-col items-center space-y-4">
            <div className="px-6 py-6 bg-white">
              <Chart color="black" size={32} iconStyle="Bold" />
            </div>
            <h4 className="flex-grow">Technical and Creative Synergies</h4>
            <div className="text-left text-sm text-slate-400">
              Engaged with creative platforms like FOUNDRY360 and delivered
              solutions in collaboration with tech companies such as mby and
              iDynamics.
            </div>
          </div>
          <div id="card2" className="flex flex-col items-center space-y-4">
            <div className="px-6 py-6 bg-white">
              <Star2 color="black" size={40} iconStyle="Bold" />
            </div>
            <h4 className="flex-grow">Educational Contributions</h4>
            <div className="text-left text-sm text-slate-400">
              Collaborated with leading insurance marketplaces like PolicyStreet
              and partnered with innovative providers such as bolttech.
            </div>
          </div>
        </section>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default company;
