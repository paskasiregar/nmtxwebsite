import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto w-full">
      {/* contact us section */}
      <div className="flex flex-col items-center justify-between p-8 md:flex-row md:items-center">
        <section className="text-center md:text-left">
          <h3 className="font-bold text-2xl mb-2">
            Consult your business with us.
          </h3>
          <div className="text-slate-600">Little description here</div>
        </section>
        <button className="bg-black text-white py-2 px-4 rounded-full mt-4 md:mt-0">
          Contact Us
        </button>
      </div>
      {/* footer section */}
      <section className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="font-bold mb-2">Company Info</h4>
            <p className="text-slate-600 text-sm md:text-base">
              Innovation Engineering
            </p>
            <p className="text-slate-600 text-sm md:text-base">Company</p>
            <p className="text-slate-600 text-sm md:text-base">Contact</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Features</h4>
            <p className="text-slate-600 text-sm md:text-base">
              Business Marketing
            </p>
            <p className="text-slate-600 text-sm md:text-base">
              User Analytics
            </p>
            <p className="text-slate-600 text-sm md:text-base">Live Chat</p>
            <p className="text-slate-600 text-sm md:text-base">
              Unlimited Support
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <p className="text-slate-600 text-sm md:text-base">iOS & Android</p>
            <p className="text-slate-600 text-sm md:text-base">Watch Demo</p>
            <p className="text-slate-600 text-sm md:text-base">Customers</p>
            <p className="text-slate-600 text-sm md:text-base">API</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Get in Touch</h4>
            <p className="text-slate-600 text-sm md:text-base">
              Atmosphere 3, 43400 Seri Kembangan, Selangor, Malaysia
            </p>
            <p className="text-slate-600 text-sm md:text-base">
              ask@nematix.com
            </p>
          </div>
        </div>
      </section>
      {/* bottom banner */}
      <div className="flex flex-col items-center justify-between p-8 md:flex-row md:items-center">
        <div className="text-slate-600 text-sm md:text-base">
          Made With Love By Nematix | All Right Reserved
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Social media */}
          <Link href="https://www.facebook.com/nematix">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.8em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"
              ></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/company/nematix">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              ></path>
            </svg>
          </Link>
          <Link href="https://twitter.com/nematixco">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
