import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl px-4">
        <div className="relative flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: 100 }}            // start hidden, right
            whileInView={{ opacity: 1, x: 0 }}          // animate to visible
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-[223.87px] h-[268.48px] md:w-[717px] md:h-[859px] z-10"
            src="/veta-phone.svg"
            alt="veta-phone-mockup"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -100 }}           // start hidden, left
          whileInView={{ opacity: 1, x: 0 }}          // animate to visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}      // animate when 30% in view
        className="absolute top-5 left-2 md:left-4 md:top-0 md:-space-y-1/3 md:right-8 flex flex-col justify-center space-y-0.5 md:space-y-2 border-[1px] p-1 md:p-4 border-black/10 blur-[6] z-10 md:w-[305px] md:h-[159px] w-[95.33px] h-[49.7px] rounded-[8px] md:rounded-[16px] bg-[#FDFBF975]/46">
          <img
            src="/time-is-money.svg"
            className="w-[7.5px] h-[7.5px] md:w-[24px] md:h-[24px] shadow-lg rounded-2xl"
            alt="time-is-money-icon"
          />
          <h3 className="text-[5.99px] md:text-[20px] leading-[100%] text-[#1A1A1A] font-medium">
            Your comfort, guaranteed.
          </h3>
          <p className="text-[5px] md:text-[16px] leading-tight text-[#000000] font-light">
            Flexible payment options that work with your lifestyle. Shop now,
            pay when it works for you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}           
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        className="absolute z-10 top-8 right-4 md:top-22 md:right-8 flex flex-col justify-center space-y-0.5 md:space-y-2 border-[1px] p-1 md:p-4 border-black/10 blur-[6] md:w-[305px] md:h-[159px] w-[95.32px] h-[49.7px] rounded-[8px] md:rounded-[16px] bg-[#FDFBF975]/46">
          <img
            src="/shield.png"
            className="w-[7.5px] h-[7.5px] md:w-[24px] md:h-[24px]"
            alt="time-is-money-icon"
          />
          <h3 className="text-[5.99px] md:text-[20px] leading-tight text-[#1A1A1A] font-medium">
            Safe & secure, always.
          </h3>
          <p className="text-[5px] md:text-[16px] leading-tight text-[#000000] font-light">
            Bank-level security with transparent pricing. Your trust is our
            destination.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}           // start hidden, left
          whileInView={{ opacity: 1, x: 0 }}          // animate to visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}      // animate when 30% in view
        className="absolute z-10 bottom-8 left-1/4 transform -translate-x-1/2  md:bottom-24 flex flex-col justify-center space-y-0.5 md:space-y-2 border-[1px] p-1 md:p-4 border-black/10 backdrop-blur-[6] md:w-[305px] md:h-[159px] w-[95.32px] h-[49.7px] rounded-[8px] md:rounded-[16px] bg-[#FDFBF975]/46">
          <img
            src="quick.png"
            className="w-[7.5px] h-[7.5px] md:w-[24px] md:h-[24px]"
            alt="time-is-money-icon"
          />
          <h3 className="text-[5.99px] md:text-[20px] leading-tight text-[#1A1A1A] font-medium">
            Fast delivery, zero stress.
          </h3>
          <p className="text-[5px] md:text-[16px] leading-tight text-[#000000] font-light">
            Get your essentials delivered instantly. No waiting, no worries.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}            
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        className="absolute z-10 top-1/2 right-4 transform translate-y-1/2 md:right-3 flex flex-col justify-center space-y-0.5 md:space-y-2 border-[1px] p-1 md:p-4 border-black/10 backdrop-blur-[6] md:w-[305px] md:h-[159px] w-[95.32px] h-[49.7px] rounded-[8px] md:rounded-[16px] bg-[#FDFBF975]/46">
          <img
            src="/market.png"
            className="w-[7.5px] h-[7.5px] md:w-[24px] md:h-[24px]"
            alt="time-is-money-icon"
          />
          <h3 className="text-[5.99px] md:text-[20px] leading-tight text-[#1A1A1A] font-medium">
            Smart Marketplace
          </h3>
          <p className="text-[5px] md:text-[16px] leading-tight text-[#000000] font-light">
            Get your essentials, food, and lifestyle in one place.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
