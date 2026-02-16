import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "/images/img-co-1.jpg",
  "/images/img-co-2.jpg",
  "/images/img-co-3.jpg",
];

 export const HeroSwiper = () => {
  return (
    <section className="relative h-screen w-full">

    
      <Swiper
      
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>

            <div
              className="h-screen bg-cover bg-center "
              style={{ backgroundImage: `url(${img})` }}
           >
                <div className="absolute z- inset-0 bg-[rgba(7,51,65,0.70)]"></div>

              <button className="custom-prev absolute hidden sm:flex lg:left-12 md:left-5 left-5  top-1/2 -translate-y-1/2 z-50 bg-[#81d86f] text-black w-12 h-12 rounded-full
    flex items-center justify-center hover:bg-[#073341] hover:text-white transition">❮</button>

  <button className="custom-next absolute hidden sm:flex lg:right-12 md:right-5 right-5 top-1/2 -translate-y-1/2 z-50 bg-[#81d86f] text-black w-12 h-12 rounded-full
    flex items-center justify-center hover:bg-[#073341] hover:text-white transition">❯</button>
              {/* Overlay */}
              <div className=" w-full flex items-center justify-center">
                <div className="text-center z-10 max-w-3xl mt-50 px-4 text-white">

                  <p className="text-[#073341] inline-flex rounded-full px-2.5 py-1 bg-[#81d86f] mb-4 font-medium">
                    M
                  </p>
                  <p className="text-white-400 mb-4 font-medium">
                    Bringing Action To Brands
                  </p>

                  <h1 className="lg:text-5xl xl:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold leading-tight">
                    Every Grate Dream Begins <br />
                    With A <span className="text-[#81d86f]" >Dreamer</span>
                  </h1>

                  <p className="text-gray-300 lg:px-0 sm:px-28 px-10 mt-6">
                    If you are going to use a passage of Lorem Ipsum, you need to be
                    sure there isn’t anything embarrassing hidden in the middle.
                  </p>

                  <div className="mt-10 flex justify-center gap-6 flex-wrap">
                    <button className="bg-[#81d86f] transition-all hover:-translate-y-1 duration-400 text-black px-8 py-3 rounded-full font-medium">
                      Get Started
                    </button>

                    <button className="flex items-center transition-all hover:-translate-y-1 gap-2">
                      <span className="w-10 h-10 rounded-full border flex items-center justify-center">
                        ▶
                      </span>
                      Watch More
                    </button>
                  </div>

                </div>
              </div>
              </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
  
    </section>
  );
};

