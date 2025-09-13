const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center gap-[25px] text-center px-4">
        <div className="w-[296px] h-[26px] md:w-[400px] text-center md:h-[29px] rounded-[8px] text-[#FDFBF9] bg-[#FF5D3F] font-light md:text-[14px] text-[10px] leading-[100%] px-2 py-4  flex items-center">
          <h1 className="w-full">
            🎉Early Access Now Open - Limited Spots Available
          </h1>
        </div>

        <h1 className="leading-[100%] -tracking-[0.5% text-center] md:text-[64px] font-bold text-[36px]">
          Shop Now.
          <br />
          <span className="text-[#FF5D3F]">Pay Later.</span>Feel Safe.
        </h1>
        <p className="text-[#000000] md:text-[21px] font-light text-[12px] leading-[120%] max-w-3xl mx-auto mt-4">
          Veta makes shopping stress-free with instant delivery, flexible
          payments, and safe credit access across Nigeria.
        </p>
        <div className="flex items-center md:flex-row flex-col md:gap-[20px] gap-[6px] justify-center">
          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%] flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25">
            <span>
              <img
                src="/approval.png"
                className="w-[6px] h-[12px] md:w-[9px] md:h-[18px]"
                alt="instant-approval-icon"
              />
            </span>
            Instant Approval
          </button>

          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%]  flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25">
            <span>
              <img
                className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                src="/shield.png"
                alt="shield-icon"
              />
            </span>
            100% Secured
          </button>

          <button className="md:w-[187px] md:text-[16px] text-[12px] font-light leading-[120%]  flex items-center justify-center gap-[10px] md:h-[43px] w-[136px] h-[26px] rounded-[6px] border-[1px] border-black/25">
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
        <div className="flex md:flex-row flex-col gap-[10px] md:gap-[20px] items-center justify-center mt-6">
          <button className="text-white cursor-pointer font-light md:font-light md:text-[16px] bg-[#FF5D3F] md:w-[168px] md:h-[43px] w-[248px] h-[36px] md:rounded-[12px] rounded-[6px]">
            Join The Waitlist
          </button>
          <button className="text-white cursor-pointer bg-[#1A1A1A] font-light md:font-light md:text-[16px] md:w-[168px] md:h-[43px] w-[248px] h-[36px] md:rounded-[12px] rounded-[6px]">
            Become a vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
