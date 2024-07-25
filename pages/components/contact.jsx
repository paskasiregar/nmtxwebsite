export const Contact = () => {
  return (
    <div className="bg-white">
      <section className="bg-white flex flex-col items-center mt-24 px-4">
        <div className="text-center font-bold text-4xl md:text-8xl mb-8">
          Contact Us
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex justify-center">
            <img
              className="object-cover h-auto w-full rounded-2xl"
              src="/img1.png"
              alt="Contact Us"
            />
          </div>
          <form className="bg-white rounded-2xl p-4 mb-4 w-full">
            <div className="mb-4 flex flex-col">
              <label
                className="flex text-gray-700 text-sm font-bold mb-2 justify-start w-full"
                htmlFor="name"
              >
                Name
              </label>
              <div className="mb-4 flex flex-col">
                <input
                  className="custom-input"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="flex text-gray-700 text-sm font-bold mb-2 justify-start w-full"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="mb-4 flex flex-col">
                <input
                  className="custom-input"
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="flex text-gray-700 text-sm font-bold mb-2 justify-start w-full"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <div className="mb-4 flex flex-col">
                <input
                  className="custom-input"
                  id="phone"
                  type="tel"
                  placeholder="+60"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <label
                className="flex text-gray-700 text-sm font-bold mb-2 justify-start w-full"
                htmlFor="discussion"
              >
                What would you like to discuss?
              </label>
              <div className="mb-4 flex flex-col">
                <textarea
                  className="custom-input"
                  id="discussion"
                  placeholder="Tell us about your idea or problem"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="relative z-10 mt-8">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
