const Offer = () => {
  return (
    <div className="flex flex-col items-center justify-start py-[59px] md:min-h-screen p-4">
      <div className="relative flex justify-center w-full max-w-6xl px-4 mb-8 md:h-[900px] md:mb-0">
        <img
          className="w-3/4 h-auto md:w-[717px] md:h-[859px] z-10"
          src="/veta-phone.svg"
          alt="veta-phone-mockup"
        />
        
        {/* Card 1: Top-Left */}
        <div 
          // Default (mobile) is NOT absolute. Absolute is applied only on md:
          className="hidden md:flex absolute z-10 md:left-4 md:top-0 md:-space-y-1/3 md:w-[305px] md:h-[159px] 
           flex-col justify-center space-y-[0.2vw] md:space-y-2 border-[0.31px] p-4 border-black/5 blur-[6] rounded-[16px] bg-[#FDFBF975]/46"
          style={{ top: '20%', left: '-2%' }} 
        >
          <img src="/time-is-money.svg" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-[20px] leading-[100%] text-[#1A1A1A] font-medium">Your comfort, guaranteed.</h3>
          <p className="text-[16px] leading-tight text-[#000000] font-light">Flexible payment options that work with your lifestyle. Shop now, pay when it works for you.</p>
        </div>

        {/* Card 2: Top-Right */}
        <div 
          className="hidden md:block absolute z-10 md:top-22 md:right-8 md:w-[305px] md:h-[159px]
           flex-col justify-center space-y-[0.2vw] md:space-y-2 border-[1px] p-4 border-black/10 blur-[6] rounded-[16px] bg-[#FDFBF975]/46"
          style={{ top: '9%', right: '4%' }}
        >
          <img src="/shield.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-[20px] leading-tight text-[#1A1A1A] font-medium">Build Trust & Credit.</h3>
          <p className="text-[16px] leading-tight text-[#000000] font-light">Every purchase strengthens your credit score, unlocking more credit for future purchases</p>
        </div>

        {/* Card 3: Bottom-Left */}
        <div 
          className="hidden absolute z-10 md:bottom-35 md:left-[20%] md:w-[305px] md:h-[159px]
          md:flex flex-col justify-center space-y-[0.2vw] md:space-y-2 border-[1px] p-4 border-black/10 backdrop-blur-[6] rounded-[16px] bg-[#FDFBF975]/46"
          style={{ bottom: '15%', left: '8%' }}
        >
          <img src="quick.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-[20px] leading-tight text-[#1A1A1A] font-medium">Fast delivery, zero stress.</h3>
          <p className="text-[16px] leading-tight text-[#000000] font-light">Get your essentials delivered instantly. No waiting, no worries.</p>
        </div>

        {/* Card 4: Bottom-Right */}
        <div 
          className="hidden absolute z-10 md:right-6 md:bottom-[25%] md:w-[305px] md:h-[159px]
          md:flex flex-col justify-center space-y-[0.2vw] md:space-y-2 border-[1px] p-4 border-black/10 backdrop-blur-[6] rounded-[16px] bg-[#FDFBF975]/46"
          style={{ bottom: '17%', right: '2%' }}
        >
          <img src="/market.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-[20px] leading-tight text-[#1A1A1A] font-medium">Smart Marketplace</h3>
          <p className="text-[16px] leading-tight text-[#000000] font-light">Get your essentials, food, and lifestyle in one place. </p>
        </div>

      </div> {/* End of phone image container */}


      {/* 3. Mobile Stacked Cards (Appears ONLY below md: breakpoint) */}
      <div className="flex flex-col items-center space-y-4 w-full md:hidden">
        
        {/* Card 1 Mobile */}
        <div className="w-full max-w-sm flex flex-col justify-center space-y-2 border p-4 border-black/5 rounded-xl bg-[#FDFBF975]/46">
          <img src="/time-is-money.svg" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-lg font-medium">Your comfort, guaranteed.</h3>
          <p className="text-sm font-light">Flexible payment options that work with your lifestyle. Shop now, pay when it works for you.</p>
        </div>
        
        {/* Card 2 Mobile */}
        <div className="w-full max-w-sm flex flex-col justify-center space-y-2 border p-4 border-black/5 rounded-xl bg-[#FDFBF975]/46">
          <img src="/shield.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-lg font-medium">Build Trust & Credit.</h3>
          <p className="text-sm font-light">Every purchase strengthens your credit score, unlocking more credit for future purchases</p>
        </div>

        {/* Card 3 Mobile */}
        <div className="w-full max-w-sm flex flex-col justify-center space-y-2 border p-4 border-black/5 rounded-xl bg-[#FDFBF975]/46">
          <img src="quick.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-lg font-medium">Fast delivery, zero stress.</h3>
          <p className="text-sm font-light">Get your essentials delivered instantly. No waiting, no worries.</p>
        </div>

        {/* Card 4 Mobile */}
        <div className="w-full max-w-sm flex flex-col justify-center space-y-2 border p-4 border-black/5 rounded-xl bg-[#FDFBF975]/46">
          <img src="/market.png" className="w-[24px] h-[24px]" alt="time-is-money-icon" />
          <h3 className="text-lg font-medium">Smart Marketplace</h3>
          <p className="text-sm font-light">Get your essentials, food, and lifestyle in one place. </p>
        </div>
        
      </div> {/* End of mobile stacked cards */}
    </div>
  );
};

export default Offer;