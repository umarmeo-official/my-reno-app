
export const AboutSection = () => {
  return (
    <section className="py-16 bg-[#f5fdff]">
      <div className="container">
        <div className=" flex flex-col lg:flex-row items-center gap-12">
        
            <div className="w-full lg:w-1/2 flex justify-center lg:order-1 order-2">
          <img 
            src="/public/images/about.png" 
            alt="Work Illustration" 
            className="max-w-full h-auto"
          />
        </div>

       {/* Right Side: Content (Aligned for better height) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:order-2 order-1">
          <div className="mb-2 flex flex-col items-center lg:items-start">
             <h4 className="text-black-600 text-lg font-semibold tracking-widest">
               About Us
             </h4>
             {/* Small underline under About Us */}
             <div className="w-10 h-[2px] bg-[#81d86f] mt-1"></div>
          </div>
          
          <h2 className="md:text-3xl xl:text-5xl lg-text-5xl flex justify-center lg:justify-start font-bold text-[#073341] md:mb-2 mb-4 leading-[1.2]">
            Best For Organize And <br className="hidden lg:block" /> Customize Easily
          </h2>
          
          {/* Height ko balance karne ke liye leading-relaxed aur mb-10 use kiya hai */}
          <p className="text-gray-500 sm:text-lg text-sm xl:leading-loose lg:leading-normal mb-5 text-justify">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure 
            there isn't anything embarrassing hidden in the middle of text.
          </p>
          
          <div className=" flex justify-center lg:justify-start">
          <button className="bg-[#073341] text-white px-10 py-4 transition-all duration-300 ease-out hover:-translate-y-1">Show More →</button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

