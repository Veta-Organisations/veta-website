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
      ans: "Veta is your shop-now-pay-later buddy. Get what you need instantly, track your order in real-time, and pay back at your own pace. Simple, safe, and stress-free.",
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
      ans: "No wahala. What you see is what you pay! no tricks, no surprises",
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
    <main className="min-h-screen" id="us">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center space-y-3 mb-12 lg:mb-16">
          <h1 className="text-[21px] lg:text-[47px] leading-[100%] lg:leading-[120%] text-center font-bold text-gray-900">
            Questions? <br /> We've Got Answers.
          </h1>
          <p className="text-[9px] lg:text-[21px] leading-[120%] tracking-[0%] font-light text-gray-700 text-center max-w-2xl">
            Everything you need to know about using VETA as a shopper or vendor.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full h-full cursor-pointer px-6 py-5 lg:rounded-[16px] text-left flex justify-between items-center bg-[#E6E6E6] transition-colors duration-200"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm lg:text-[21px] font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs lg:text-base text-[#3A3A3A] leading-relaxed">
                      {item.ans}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-white rounded-full p-2 ml-4">
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
