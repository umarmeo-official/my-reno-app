export const NavLink = ({ href, children, active = false }) => {
    return (
      <a
        href={href}
        className={`relative font-medium transition
          ${active ? "text-[#81d86f]" : "text-white hover:text-[#81d86f]"}
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
          after:bg-[#81d86f] after:origin-left after:transition-transform
          ${active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
        `}
      >
        {children}
      </a>
    );
  };
  
  