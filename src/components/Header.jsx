import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 120; 

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#price", label: "Price" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-[rgba(7,51,65,0.9450980392)] shadow-lg"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">

          <div className="flex items-center gap-2">
            <a href="#" className="text-white text-2xl font-bold">
              <span className="bg-[#81d86f] px-1 rounded-full mr-1 text-black">
                M
              </span>
              UMAR
            </a>
          </div>

          <nav className="hidden lg:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={activeSection === link.href.slice(1)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#"
              className="text-white border border-[#81d86f] px-6 py-2 rounded-full hover:bg-[#81d86f] hover:text-black transition"
            >
              Contact Us
            </a>
          </div>

          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="bg-black/90 backdrop-blur-sm rounded-xl mt-2">
            <nav className="flex flex-col gap-5 px-6 py-6 text-white font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${
                    activeSection === link.href.slice(1)
                      ? "text-[#81d86f] font-bold"
                      : ""
                  }`}
                  onClick={() => setOpen(false)} 
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#"
                className="mt-4 text-center border border-[#81d86f] px-6 py-2 rounded-full hover:bg-[#81d86f] hover:text-black transition"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
