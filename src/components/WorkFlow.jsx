import { Search, Database, Target, Users } from "lucide-react";

const workflow = [
  {
    title: "Our Research",
    desc: "A research project is an academic, scientific, or professional.",
    icon: Search,
  },
  {
    title: "Data Collection",
    desc: "Data collection methods include surveys, interviews, observations.",
    icon: Database,
  },
  {
    title: "Targeting",
    desc: "Project targets help structure progress into smaller pieces of work.",
    icon: Target,
  },
  {
    title: "Solve Problem",
    desc: "Problem solving is a process of identifying roadblocks.",
    icon: Users,
  },
];

export const WorkFlow = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/group-working.jpg"
              alt="Work Flow"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left lg:order-1 order">

            <h4 className="font-bold text-sm tracking-[0.2em] mb-3 uppercase text-gray-800">
              Our Work Flow
            </h4>

            <div className="w-14 h-[2px] bg-[#81d86f] xl:mb-8 mb-4"></div>

            <h2 className="text-1xl xl:text-4xl lg:text-2xl font-bold text-gray-800 xl:mb-8 lg:mb-2 mb-5">
              We Are Truly Able To Help Our Clients Live Happier
            </h2>

            <p className="text-gray-600 xl:mb-10 mb-6 max-w-xl">
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words.
              College in Virginia, looked up one of the more obscure Latin words.
            </p>

            {/* ICON GRID */}
            <div className="grid sm:grid-cols-2 gap-10 w-full">
              {workflow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    {/* ICON */}
                    <div className="group w-14 h-14 mb-3 flex items-center justify-center rounded-md 
                      bg-[rgba(129,216,111,0.2)] transition duration-300
                      hover:bg-[#073341] hover:shadow-[0px_0px_7px_3px_#81d86f]">
                      <Icon className="text-[#073341] group-hover:text-white transition" />
                    </div>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
