import {
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Github,
  } from "lucide-react";
  
  export const Footer = () => {
    return (
      <footer className="bg-[#073341] text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
  
  {/* Logo & Contact */}
  <div className="sm:flex sm:flex-col sm:items-center lg:items-start text-center sm:text-center lg:text-left">
    <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center sm:justify-center lg:justify-start">
      <span className="bg-[#81d86f] text-black w-8 h-8 flex items-center justify-center rounded-full">
        M
      </span>
      UMAR
    </h2>

    <div className="mt-6 space-y-3 text-sm">
      <p className="flex items-center gap-2 justify-center sm:justify-center lg:justify-start">
        <Phone size={16} /> +123-4567-890
      </p>
      <p className="flex items-center gap-2 justify-center sm:justify-center lg:justify-start">
        <Mail size={16} /> support@gmail.com
      </p>
    </div>

    <div className="flex gap-3 mt-5 justify-center sm:justify-center lg:justify-start">
      {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
        <span
          key={i}
          className="w-9 h-9 rounded-full border border-black-600 flex items-center justify-center bg-[#073341]  transition duration-300 hover:shadow-[0px_0px_7px_3px_#81d86f]"
        >
          <Icon size={16} />
        </span>
      ))}
    </div>
  </div>

  {/* Pages */}
  <div className="sm:flex sm:flex-col sm:items-center lg:items-start text-center sm:text-center lg:text-left">
    <h3 className="text-white font-semibold mb-5">Pages :</h3>
    <ul className="space-y-3 text-sm">
      {["About", "Brand", "Services", "Price", "Testimonial"].map(
        (item) => (
          <li
            key={item}
            className="hover:translate-x-2 duration-400 cursor-pointer transition"
          >
            {item}
          </li>
        )
      )}
    </ul>
  </div>

  {/* Useful Links */}
  <div className="sm:flex sm:flex-col sm:items-center lg:items-start text-center sm:text-center lg:text-left">
    <h3 className="text-white font-semibold mb-5">Useful Links :</h3>
    <ul className="space-y-3 text-sm">
      {[
        "Terms of Services",
        "Privacy Policy",
        "Documentation",
        "Changelog",
        "Components",
      ].map((item) => (
        <li
          key={item}
          className="hover:translate-x-2 duration-400 cursor-pointer transition"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Subscribe */}
  <div className="sm:flex sm:flex-col sm:items-center lg:items-start text-center sm:text-center lg:text-left">
    <h3 className="text-white font-semibold mb-5">
      Subscribe to Our App :
    </h3>

    <div className="flex p-1 bg-[rgba(129,216,111,0.1)] rounded-md overflow-hidden">
      <input
        type="email"
        placeholder="Enter email"
        className="w-full px-3 py-2 text-sm text-white outline-none placeholder-gray-400"
      />
      <button className="bg-[#073341] px-4 text-white font-semibold transition hover:opacity-90">
        ➤
      </button>
    </div>

    <p className="text-xs text-gray-400 mt-4 leading-relaxed text-center sm:text-center lg:text-left">
      Greater pleasure all endure pain avoided welcomed avoided pain.
    </p>

    <button className="text-[#81d86f] text-sm mt-3 hover:underline">
      Learn More!
    </button>
  </div>
</div>

  
        {/* Bottom Bar */}
        <div className=" mt-14 py-5 text-center bg-[#032833] text-sm text-[rgba(255,255,255,.5)]">
          © 2025 Umar - Theme.design
        </div>
      </footer>
    );
  };
  
