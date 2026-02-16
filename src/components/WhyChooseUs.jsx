const features = [
  "1000+ Trusted Clients",
  "Outcome Focused",
  "30+ Dedicated Teams",
  "Web Application Expert",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#f5fdff]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <h4 className="font-bold text-sm tracking-[0.2em] mb-3 uppercase text-gray-800">
              Why Choose Us
            </h4>

            <div className="w-14 h-[2px] bg-[#81d86f] mb-8"></div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Trusted World Widely
            </h2>

            <p className="text-gray-600 mb-9 max-w-xl">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages and more recently with
              desktop publishing.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6 w-full lg:w-auto lg:justify-start justify-items-center">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#073341] text-white px-8 py-3 mt-8 transition-all duration-300 ease-out hover:-translate-y-1">
              Sign Up
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/images/working.jpg"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
