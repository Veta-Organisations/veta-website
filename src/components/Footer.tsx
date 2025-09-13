import { InstagramIcon, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <FaXTwitter className="w-[6.95px] h-[6.95px] lg:w-[20px] lg:h-[20px]" />
      ),
      link: "",
    },
    {
      name: "Instagram",
      icon: (
        <InstagramIcon className="w-[6.95px] h-[6.95px] lg:w-[20px] lg:h-[20px]" />
      ),
      link: "",
    },
    {
      name: "Linkedin",
      icon: (
        <Linkedin className="w-[6.95px] h-[6.95px] lg:w-[20px] lg:h-[20px]" />
      ),
      link: "",
    },
  ];

  return (
    <main className="min-h-contain">
      <div className="mx-auto max-w-6xl px-5">
        <div className="p-5 pb-[13.35px] lg:pb-[80px] flex border-t-[1px] border-[#1A1A1A]">
          <div className="flex items-center gap-[12px]">
            <img
              className="w-[10.61px] h-[6.95px] lg:w-[36.62px] lg:h-[24px]"
              src="/footer-logo.svg"
              alt="Veta Logo"
            />
            <h3 className="lg:text-[16px] text-[4.6px] font-light leading-[100%] tracking-[-0.5%]">
              © 2025 Veta. Life, Reimagined.
            </h3>
          </div>

          <div className="ml-auto mr-[20px] flex gap-[8.69px] lg:gap-[30px]">
            {["Privacy Policy", "Terms of service", "Contact"].map((el, i) => (
              <ul key={i} className="">
                <li className="font-light text-[4.64px] lg:text-[16px]">
                  {el}
                </li>
              </ul>
            ))}
          </div>

          <div className="flex items-center justify-center gap-[5.8px] lg:gap-[20px]">
            {socialLinks.map((el, i) => (
              <a href={el.link} key={i}>
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
