
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Pagination, Autoplay } from 'swiper/modules';


  // Swiper styles
  import 'swiper/css';

  export const ClientSection = () => {
    const brands = [
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
      { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
      { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
      { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" },
      { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    ];

    const testimonials = [
      { id: 1, name: "Metho k. Partho", location: "CANADA", img: "/images/avatar-1.jpg" },
      { id: 2, name: "Merry J. Wyman", location: "NEW ZEALAND", img: "/images/avatar-2.jpg" },
      { id: 3, name: "Anthom Bu Spar", location: "Australia", img: "/images/avatar-3.jpg" },
      { id: 4, name: "Jhon k. Matro", location: "Marshall Islands ", img: "/images/avatar-5.jpg" },
      { id: 5, name: "Metho k. Partho", location: "CANADA", img: "/images/avatar-1.jpg" },

    ];

    return (
      <section className="pt-16 pb-4 bg-[#f5fdff] overflow-hidden">
        <div className="container">
          
          {/* Our Clients Header */}
          <div className="flex flex-col items-center">
    <h4 className="text-black-600 text-lg font-semibold tracking-widest text-center">Our Clients</h4>
    {/* Small underline */}
    <div className="w-10 h-[2px] bg-[#81d86f] mt-2"></div>
  </div>
  <h2 className="text-4xl text-center font-bold text-[#073341] mt-8 mb-18">What Our Clients Say</h2>

          {/* 1. Logos Section: Auto-play + Pause on Hover + Hover Animation */}
          <div className="mb-16 ">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={2}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, 
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-16 w-full hover:bg-[#3f8095] grayscale opacity-50 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(7,51,65,0.25)] cursor-pointer">
      
                    <img src={brand.logo} alt={brand.name} className="h-8 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 2. Testimonial Section: Manual Scroll (No Auto) + 4 Lines */}
          <div className="max-w-7xl mx-auto px-4 pb-20 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span class="
                  ${className}
                  !w-4
                  !h-2
                  !rounded-full
                  !bg-gray-400
                  mx-1
                  transition-all
                  duration-300
                "></span>
              `;
            },
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="
            pb-16
            [&_.swiper-pagination]:flex
            [&_.swiper-pagination]:justify-center
            [&_.swiper-pagination-bullet-active]:!bg-[#073341]
          "
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full">
                <div className="bg-white p-6 rounded-2xl mb-12 shadow border border-gray-100 flex gap-4 h-full">

                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 rounded-full border-2 border-[#81d86f] p-[2px] object-cover"/>
                  </div>

                  {/* Content */}
                  <div>
                  <span className="bg-[#81d86f] text-white text-xs rounded-full px-1">
                      ✓
                    </span>
                    <p className="text-gray-500 text-[10px] sm:text-sm md:text-md  lg:text-lg italic my-2">
                      “Our task must be to free ourselves by widening our site circle
                      of compassion to embrace all living creatures.”
                    </p>
                    <div className="text-[oklch(0.86_0.2_91.92)] text-lg mb-1">
                      ★★★★★
                    </div>

                    <h4 className="font-bold text-[#073341] text-md">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-sm uppercase">
                      {item.location}
                    </p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


        </div>

        <style>{`
          .swiper-pagination-bullet-active {
            background-color: #073341 !important;
            width: 20px !important; 
          }
        `}</style>
      </section>
    );
  };

