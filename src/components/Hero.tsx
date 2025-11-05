import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/business");
  };

  return (
    <div className="pt-[40px] md:pt-[170px] min-h-[581px] md:min-h-screen flex flex-col items-center gap-[25px]  ">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center gap-[25px] text-center px-4">
        <div className="w-[296px] h-[26px] md:w-[400px] text-center md:h-[29px] rounded-[12px] text-[#FDFBF9] bg-[#FF5D3F] font-light md:text-[14px] text-[10px] leading-[100%] px-2 py-4 flex items-center">
          <h1 className="w-full">
            🎉Early Access Now Open - Limited Spots Available
          </h1>
        </div>

        <h1 className="leading-[100%] tracking-[-0.5%] text-center font-bold text-[36px] md:text-[64px]">
          Shop Now.
          <br className="block md:hidden" />
          <span className="text-black"> Pay Later,</span>
          <br />
          <span className="text-[#FF5D3F]">Build Credit.</span>
        </h1>

        <p className="text-[#000000] text-[16px] md:text-[21px] font-extralight leading-[120%] text-center mx-auto max-w-[600px] md:max-w-3xl">
          Veta makes shopping stress-free with instant delivery, flexible payments, and a safe way to build your credit score across Nigeria.
        </p>

        <div className="flex items-center md:flex-row flex-col md:gap-[20px] gap-[10px] justify-center">
          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%] flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25 bg-white">
            <span>
              <img
                src="/approval.png"
                className="w-[6px] h-[12px] md:w-[9px] md:h-[18px]"
                alt="instant-approval-icon"
              />
            </span>
            Instant Approval
          </button>

          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%]  flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25 bg-white">
            <span>
              <img
                className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                src="/shield.png"
                alt="shield-icon"
              />
            </span>
            100% Secured
          </button>

          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%]  flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25 bg-white">
            <span>
              <img
                className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                src="/quick.png"
                alt="quick-icon"
              />
            </span>
            Quick Delivery
          </button>
        </div>
        
        <div className="flex md:flex-row flex-col gap-[10px] md:gap-[20px] items-center justify-center">
          <button className="text-white cursor-pointer font-light md:font-light md:text-[16px] bg-[#FF5D3F] md:w-[168px] md:h-[43px] w-[248px] h-[36px] md:rounded-[12px] rounded-[6px]">
            Join The Waitlist
          </button>
          <button
            onClick={handleClick}
            className="text-white cursor-pointer bg-[#1A1A1A] font-light md:font-light md:text-[16px] md:w-[168px] md:h-[43px] w-[248px] h-[36px] md:rounded-[12px] rounded-[6px]"
          >
            Become a vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
