import { HamburgerIcon } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { title: "What we offer", href: "offer" },
    { title: "About Us", href: "us" },
    { title: "Join Our Waitlist", href: "waitlist" },
  ];

  return (
    <nav className="fixed top-0 bg-white md:h-[75px] p-6 z-50 w-full">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div>
          <img src="/logo.png" className="w-[95px] h-[24px]" alt="Veta Logo" />
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row gap-10">
            {navLinks.map((link, el) => (
              <li
                key={el}
                className="text-[#1A1A1A] font-normal leading-[100%] -tracking-[0.5px] cursor-pointer md:text-[16px]"
              >
                <Link to={link.href} smooth={true} duration={500}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <button className="w-[137px] h-[43px] cursor-pointer text-white font-light rounded-[12px] bg-[#FF5D3F]">
            <Link smooth={true} duration={500} to="waitlist">
              Join Waitlist
            </Link>
          </button>
        </div>

        <div className="block lg:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
