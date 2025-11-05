import { InstagramIcon, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <FaXTwitter className="w-[16px] h-[16px] lg:w-[28px] lg:h-[28px]" />
      ),
      link: "",
    },
    {
      name: "Instagram",
      icon: (
        <InstagramIcon className="w-[16px] h-[16px] lg:w-[28px] lg:h-[28px]" />
      ),
      link: "",
    },
    {
      name: "Linkedin",
      icon: (
        <Linkedin className="w-[16px] h-[16px] lg:w-[28px] lg:h-[28px]" />
      ),
      link: "",
    },
  ];

  return (
  <main id="footer">
      <div className="mx-auto max-w-6xl px-[20px] py-[17px] md:py-[30px]">
        <div className="border-t border-black/24 pb-[14px]" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:py-[10px] md:px-[30px] gap-3">
          {/* Logo + text (left) */}
          <div className="flex items-center gap-[15px]">
            <img
              className="w-7 h-7 md:w-[36.62px] md:h-[24px]"
              src="/footer-logo.svg"
              alt="Veta Logo"
            />
            <h3 className="text-[12px] lg:text-[18px] font-light leading-[100%] tracking-[-0.5%]">
              © 2025 Veta. Life, Reimagined.
            </h3>
          </div>

          {/* Right group: links + icons */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:gap-[40px] gap-4">
            {/* Links */}
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-[24px]">
              {["Privacy Policy", "Terms of Service", "Contact"].map((el, i) => (
                <li
                  key={i}
                  className="font-light text-[12px] cursor-pointer hover:underline"
                >
                  {el}
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-[10px] md:gap-[16px]">
              {socialLinks.map((el, i) => (
                <a href={el.link} key={i} target="_blank" rel="noreferrer">
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
);


};

export default Footer;
