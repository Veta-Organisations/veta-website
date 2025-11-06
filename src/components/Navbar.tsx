import { HamburgerIcon } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navLinks = [
    { title: "What we offer", href: "offer" },
    { title: "About Us", href: "us" },
    { title: "Join Our Waitlist", href: "waitlist" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full transition-all duration-300 
      ${scrolled ? "md:bg-white/10 md:backdrop-blur-md" : "bg-transparent"} 
      md:fixed md:top-0 md:left-0`}
    >
      <div className="flex justify-between items-center mx-auto max-w-6xl px-4 py-4 md:px-8 md:py-6 md:h-[75px]">
        
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="Veta Logo"
            className="w-[80px] h-[20px] md:w-[95px] md:h-[24px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-[#1A1A1A]/70 font-normal leading-[100%] -tracking-[0.5px] cursor-pointer md:text-[16px]"
              >
                <Link to={link.href} smooth={true} duration={500}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="w-[137px] h-[43px] cursor-pointer text-white font-light rounded-[12px] bg-[#FF5D3F]">
            <Link smooth={true} duration={500} to="waitlist">
              Join Waitlist
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <HamburgerIcon size={22} strokeWidth={1.5} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
