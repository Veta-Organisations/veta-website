import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Features = () => {
  const featuresOne = [
    {
      name: "Sign Up & Get Instant Approval",
      icon: "/signup.png",
      desc: "Create your VETA account in just a few clicks using your email address and get approved.",
    },
    {
      name: "Shop What You Need Right Away",
      icon: "/market.png",
      desc: "Whether it's daily needs or big purchases, order what you need, enjoy it right away.",
    },
    {
      name: "Pay Later, On Your Terms",
      icon: "/time-is-money.svg",
      desc: "Choose a flexible payment schedule that fits your life without stress or hidden fees.",
    },
    {
      name: "Build Trust with Every Purchase",
      icon: "/time-is-money.svg",
      desc: "Build your credit with every purchase you make and every deadline you meet, thereby increasing future credit capacity. ",
    },
  ];

  const featuresTwo = [
    {
      name: "Partner With VETA",
      icon: "/signup.png",
      desc: "Sign up your business in minutes, get verified Instantly join a growing ecosystem of forward-thinking vendors offering flexible payment options to their customers.and",
    },
    {
      name: "List Your Products & Start Selling",
      icon: "/market.png",
      desc: "Upload your products or services to the VETA marketplace, from essentials to lifestyle goods. Our platform puts your store in front of high-intent shoppers who are ready to buy now and pay later.",
    },
    {
      name: "Get Paid, Grow Faster",
      icon: "/time-is-money.svg",
      desc: "As customers shop and choose flexible payments, you get paid without delays while we handle the rest — from approvals to repayment schedules. More conversions, fewer abandoned carts, and a seamless experience that keeps them coming back.",
    },
    
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/business");
  };

  return (
    <div className="min-h-screen" id="offer">
  <div className="mx-auto max-w-6xl px-4 flex flex-col gap-[50px] items-center justify-center">

    {/* Feature 1 */}
    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 md:min-h-screen">
      <div className="lg:col-span-1 order-2 lg:order-2 flex justify-center">
        <img src="featuresOne.svg" alt="Feature One" />
      </div>

      <div className="space-y-4 lg:col-span-1 order-1 lg:order-1">
        <div className="space-y-3">
          <h1 className="text-[32px] lg:text-[36px] font-medium leading-[120%]">
            The Smarter Way to Shop & Pay
          </h1>
          <p className="font-light text-[14px] leading-[100%] tracking-[-0.5px] max-w-[500px]">
            Get the things you need today, from essentials to lifestyle buys, and pay flexibly — because life shouldn't wait for payday.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-[16px] lg:gap-[30px]">
          {featuresOne.map((el, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-[12px] lg:gap-[13px]"
            >
              <img
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                src={el.icon}
                alt={el.name}
              />
              <div className="flex flex-col gap-[4px] lg:gap-[10px]">
                <h1 className="text-[15px] lg:text-[24px] leading-[100%]">{el.name}</h1>
                <p className="text-[11px] font-light lg:text-[16px] leading-[120%] lg:leading-[100%]">
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 text-light text-white cursor-pointer lg:text-[16px] text-[12px] leading-[120%] w-[144px] h-[34px] lg:w-[168px] lg:h-[43px] lg:rounded-[12px] rounded-[6px] bg-[#FF5D3F]">
          <Link smooth={true} duration={500} to="waitlist">
            Join Waitlist
          </Link>
        </button>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 md:min-h-screen">
      <div className="lg:col-span-1 order-2 lg:order-1 flex justify-center">
        <img src="featuresTwo.svg" alt="Feature Two" />
      </div>

      <div className="space-y-4 lg:col-span-1 order-1 lg:order-2">
        <div className="space-y-3">
          <h1 className="text-[32px] lg:text-right lg:text-[36px] font-medium leading-[120%]">
            More Shoppers. More Sales.
          </h1>
          <p className="text-[14px] lg:text-right lg:text-[16px] font-light leading-[120%]">
            Partner with VETA to reach ready-to-buy customers and get paid without delays — we handle the credit and repayments.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-[16px] lg:gap-[30px]">
          {featuresTwo.map((el, i) => (
            <div
              key={i}
              className="flex flex-row lg:flex-row-reverse items-center gap-[12px] lg:gap-[13px]"
            >
              <img
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                src={el.icon}
                alt={el.name}
              />
              <div className="flex flex-col gap-[4px] lg:gap-[10px]">
                <h1 className="text-[15px] text-left lg:text-right lg:text-[24px] leading-[100%]">
                  {el.name}
                </h1>
                <p className="text-[11px] text-left lg:text-right font-light lg:text-[16px] leading-[120%] lg:leading-[100%]">
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex lg:justify-end">
          <button
            onClick={handleClick}
            className="mt-6 text-light text-white cursor-pointer lg:text-[16px] text-[12px] leading-[120%] w-[144px] h-[34px] md:w-[168px] md:h-[43px] font-light md:rounded-[12px] rounded-[6px] bg-[#1A1A1A]"
          >
            Partner with Veta
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

  );
};

export default Features;
