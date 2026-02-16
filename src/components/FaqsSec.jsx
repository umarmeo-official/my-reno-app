import { useState } from "react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How Benefit That I Got When Choose Basic Plan",
      answer:
        "Contrary to this, individuals above this tax bracket of 30% can benefit from low basic pay. This is because the superannuation or retirement benefits have to be approximately 27% of the basic pay.",
    },
    {
      question: "How Do I Organize My Notes?",
      answer:
        "You can organize your notes using our built-in categorization tool and tag system for easy retrieval.",
    },
    {
      question: "How Long For A Standard Project?",
      answer:
        "A standard project typically takes 2-4 weeks depending on the complexity and client requirements.",
    },
    {
      question: "How About Data Security & NDA Agreement?",
      answer:
        "We take security seriously. All projects are covered by a standard NDA to ensure your data remains confidential.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-gray-700 text-sm font-semibold tracking-[0.3em] uppercase">
            FAQs
          </h4>

          <div className="w-10 h-[2px] bg-[#81d86f] mt-2 mb-6"></div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#073341]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">

          {/* LEFT: FAQ ACCORDION */}
          <div className="text-center lg:text-left">
            <h3 className="font-medium text-lg mb-2">
              People also ask :
            </h3>

            <p className="text-gray-500 text-md mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              In this detailed guide, we're going to dive deep into the whole
              concept of FAQs. To discover their main purpose.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex justify-between items-center p-4 text-left transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-[#073341] text-white"
                        : "text-slate-800"
                    }`}
                  >
                    <span className="font-semibold text-sm">
                      {faq.question}
                    </span>

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-40 p-5"
                        : "max-h-0 p-0"
                    } bg-[#f5fdff] text-gray-600 text-sm leading-relaxed border-t border-gray-200`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg mb-8 text-center lg:text-left">
              Ask your different questions :
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-300 py-2 outline-none text-sm bg-transparent focus:border-[#81d86f]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 py-2 outline-none text-sm bg-transparent focus:border-[#81d86f]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 py-2 outline-none text-sm bg-transparent focus:border-[#81d86f]"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border-b border-gray-300 py-2 outline-none text-sm bg-transparent resize-none focus:border-[#81d86f]"
              />

              <button
                type="submit"
                className="bg-[#073341] text-white px-8 py-3 rounded text-sm font-semibold transition-all duration-300 hover:-translate-y-1 mx-auto lg:mx-0 block"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
