import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  ans: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is Veta and how does it work?",
      ans: "Veta is your shop-now-pay-later buddy. Get what you need instantly, track your order in real-time, pay back at your own pace, all while building your credit score. Simple, safe, and stress-free.",
    },
    {
      question: "Is Veta a loan app?",
      ans: "Nope, Veta isn't a loan app. We're here to give safe, flexible credit for shopping.",
    },
    {
      question: "Can I shop with Veta if I already have the full money?",
      ans: "Of course! You can shop through Veta whether you pay now or later. We're here to make shopping easy, flexible and safe.",
    },
    {
      question: "Are there hidden fees or extra charges?",
      ans: "What you see is what you pay! No tricks, No surprises, No wahala!",
    },
    {
      question: "When will Veta be available to use?",
      ans: "Very soon! Join the waitlist now and be among the first to experience Veta when we launch.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main id="us">
  <div className="container mx-auto px-4 pt-[50px] lg:py-20">
    <div className="flex flex-col items-center justify-center space-y-3 mb-6 lg:mb-16">
      <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[47px] leading-[100%] lg:leading-[120%] text-center font-bold text-gray-900">
        Questions? <br /> We've Got Answers.
      </h1>
      <p className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[21px] leading-[120%] tracking-[0%] font-light text-gray-700 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
        Everything you need to know about using VETA as a shopper or vendor.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-[7.5px] md:space-y-[20px]">
      {faqItems.map((item, index) => (
        <div
  key={index}
  className="bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer"
>
  <button
    onClick={() => toggleFAQ(index)}
    className="w-full h-full cursor-pointer px-4 py-3 md:px-6 md:py-6 lg:rounded-[16px] text-left flex justify-between items-center bg-[#E6E6E6] transition-all duration-300"
  >
    <div className="flex flex-col space-y-1.5 md:space-y-2 justify-center">
      <h3 className="text-[11px] sm:text-[14px] md:text-[21px] font-semibold text-gray-900 pr-4">
        {item.question}
      </h3>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[11px] sm:text-[12px] md:text-[16px] lg:text-base text-[#3A3A3A] leading-relaxed">
          {item.ans}
        </p>
      </div>
    </div>
    <div className="flex-shrink-0 bg-white rounded-full p-2 ml-4 flex items-center justify-center">
      {openIndex === index ? (
        <ChevronUp size={20} className="text-[#FF5D3F]" />
      ) : (
        <ChevronDown size={20} className="text-[#FF5D3F]" />
      )}
    </div>
  </button>
</div>

      ))}
    </div>
  </div>
</main>


  );
};

export default FAQ;
