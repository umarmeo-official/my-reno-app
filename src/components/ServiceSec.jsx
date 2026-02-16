const services = [
  {
    id: "01",
    title: "Security Advisory",
  },
  {
    id: "02",
    title: "Technical Assurance",
  },
];

const icons = [
  { icon: "♡", text: "50+ Unique Design" },
  { icon: "💻", text: "Web Development" },
  { icon: "📊", text: "Data Recovery" },
];

const ICON_BOX =
  "w-14 h-14 bg-[rgba(129,216,111,0.2)] hover:bg-[#073341] hover:shadow-[0px_0px_7px_3px_#81d86f] hover:text-white text-[#073341] duration-400 rounded-full flex items-center justify-center text-xl";

export const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container lg:px-24">

        {/* Top Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-6 text-center sm:text-center md:text-left">
            <h4 className="text-black-500 font-bold text-sm tracking-[0.2em] mb-3 uppercase">
              Our Services
            </h4>
            <div className="w-14 h-[2px] bg-[#81d86f] mb-8 mx-auto sm:mx-auto md:mx-0"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#073341] leading-[1.1]">
              We Providing Best Advance Services
            </h2>
          </div>

          <div className="md:col-span-6">
            <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-lg mx-auto sm:mx-auto md:mx-0">
              All the Lorem Ipsum of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.
            </p>
            <a
              href="#"
              className="text-[#81d86f] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity justify-center sm:justify-center md:justify-start"
            >
              Learn More <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {services.map(({ id, title }) => (
            <div
              key={id}
              className="md:col-span-6 border-t border-gray-200 pt-10 text-center sm:text-center md:text-left"
            >
              <span className="text-[#81d86f] font-bold text-2xl block mb-5">
                {id}
              </span>
              <h3 className="text-2xl font-bold text-[#073341] mb-5">
                {title}
              </h3>
              <p className="text-gray-500 text-[17px] leading-[1.8]">
                combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Icons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12 border-t border-gray-100">
          {icons.map(({ icon, text }, i) => (
            <div key={i} className="md:col-span-4 flex flex-col items-center gap-5">
              <div className={ICON_BOX}>{icon}</div>
              <span className="font-bold text-[#073341] text-lg">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
