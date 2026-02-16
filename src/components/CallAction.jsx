
export const CallToAction = () => {
  return (
    <section className="relative bg-[#032833]  overflow-hidden h-[280px] flex items-center justify-center">
      
      {/* Left Design Image */}
      <div className="absolute -left-50 -top-45 h-[180%]  pointer-events-none">
        <img 
          src="/public/images/sssplatter.svg" 
          alt="design-left" 
          className="h-full w-full object-contain object-left opacity-50"
        />
      </div>

      {/* Right Design Image */}
      <div className="absolute -right-50 -top-45 h-[180%]  pointer-events-none">
        <img 
          src="/public/images/sssplatter.svg" 
          alt="design-right" 
          className="h-full w-full object-contain object-right opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Free to start, and affordable as you grow
        </h2>
        
        <p className="text-gray-400 text-md sm:text-lg md:text-xl mb-10">
          Contact Us and we'll get in touch
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-[#81d86f] text-white font-semibold rounded-sm transition-all duration-300 ease-out hover:-translate-y-1">
            Request Access
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3 bg-[#073341] text-white font-semibold  rounded-sm transition-all duration-300 ease-out hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
      
    </section>
  );
};

