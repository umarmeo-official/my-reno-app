export const FlexibleSec = () => {
  const plans = [
    {
      title: "STARTER",
      price: "19",
      features: [
        "5 Domains access",
        "30 customize sub page",
        "120 disk space",
        "Frontend Builder",
        "24/7 phone support",
      ],
      buttonColor: "bg-[#073341]",
    },
    {
      title: "STANDARD",
      price: "59",
      features: [
        "10 Domains access",
        "50 customize sub page",
        "180 disk space",
        "Frontend Builder",
        "24/7 phone support",
      ],
      buttonColor: "bg-[#81d86f]",
      isFeatured: true,
    },
    {
      title: "UNLIMITED",
      price: "119",
      features: [
        "Unlimited Domains access",
        "Unlimited customize sub page",
        "Unlimited disk space",
        "Frontend Builder",
        "24/7 phone support",
      ],
      buttonColor: "bg-[#073341]",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      
      {/* BACKGROUND SHAPE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[400px] bg-[#073341F1]"
        style={{
          clipPath: "polygon(0 45%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-gray-700 text-sm font-semibold tracking-[0.3em] uppercase">
            Our Price
          </h4>

          <div className="w-10 h-[2px] bg-[#81d86f] mt-2 mb-6"></div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Flexible Plans & Pricing
          </h2>
        </div>

        {/* PLANS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center
              border-t-2 transition-all duration-300 hover:scale-105
              ${plan.isFeatured ? "border-[#81d86f]" : "border-[#073341]"}`}
            >
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.isFeatured ? "text-[#81d86f]" : "text-[#073341]"
                }`}
              >
                {plan.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Monthly Package
              </p>

              {/* PRICE */}
              <div className="flex items-end mb-8">
                <span
                  className={`text-4xl font-bold ${
                    plan.isFeatured ? "text-[#81d86f]" : "text-[#073341]"
                  }`}
                >
                  $
                </span>
                <span
                  className={`text-5xl font-black mx-1 ${
                    plan.isFeatured ? "text-[#81d86f]" : "text-[#073341]"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm ml-1">
                  / month
                </span>
              </div>

              {/* FEATURES */}
              <ul className="w-full space-y-4 mb-10 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-[#81d86f]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`w-full py-3 rounded-md text-white font-bold transition-opacity hover:opacity-90 ${plan.buttonColor}`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
