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
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-[50px] items-center justify-center ">
        <div className="grid items-center lg:grid-cols-2 grid-cols-1 justify-center">
          <div className="lg:col-span-1 order-1 lg:order-2">
            <img src="featuresOne.svg" alt="" />
          </div>

          <div className="space-y-4 lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-3">
              <h1 className="text-[21px] lg:text-[36px] font-medium leading-[120%]">
                The Smarter Way to Shop & Pay
              </h1>
              <p className="text-[9px] lg:text-[16px] font-light leading-[120%]">
                Get the things you need today, from essentials to lifestyle
                buys, and pay flexibly, because life shouldn't wait for payday.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-[16px] lg:gap-[30px]">
              {featuresOne.map((el, i) => (
                <div
                  className="flex flex-row items-center gap-[12px] lg:gap-[13px]"
                  key={i}
                >
                  <img
                    className="w-[24px] h-[24px] lg:w-[45px] lg:h-[45px]"
                    src={el.icon}
                    alt={el.name}
                  />
                  <div className="flex flex-col gap-[4px] lg:gap-[10px]">
                    <h1 className="text-[12px] lg:text-[24px] leading-[100%]">
                      {el.name}
                    </h1>
                    <p className="text-[9px] font-light lg:text-[16px] tracking-[0%] leading-[120%] lg:tracking-[-5%] lg:leading-[100%]">
                      {el.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <button className="text-light text-white cursor-pointer lg:text-[16px] text-[12px] leading-[120%] lg:leading-[100%] tracking-[0px] lg:tracking-[-0.5px] w-[144px] h-[34px] lg:w-[168px] lg:h-[43px] lg:rounded-[12px] rounded-[6px] bg-[#FF5D3F]">
                <Link smooth={true} duration={500} to="waitlist">
                  Join Waitlist
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="grid items-center lg:grid-cols-2 grid-cols-1 justify-center">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <img src="featuresTwo.svg" alt="" />
          </div>

          <div className="space-y-4 lg:col-span-1 order-2">
            <div className="space-y-3">
              <h1 className="text-[21px] lg:text-right lg:text-[36px] font-medium leading-[120%]">
                More Shoppers. More Sales.
              </h1>
              <p className="text-[9px] lg:text-right lg:text-[16px] font-light leading-[120%]">
                Partner with VETA to reach ready-to-buy customers and get paid
                without delays while we handle the credit and repayments
              </p>
            </div>

            <div className="mt-5 flex flex-col  gap-[16px] lg:gap-[30px]">
              {featuresTwo.map((el, i) => (
                <div
                  className="flex flex-row lg:flex-row-reverse items-center  gap-[12px] lg:gap-[13px]"
                  key={i}
                >
                  <img
                    className="w-[24px] h-[24px] lg:w-[45px] lg:h-[45px]"
                    src={el.icon}
                    alt={el.name}
                  />
                  <div className="flex flex-col gap-[4px] lg:gap-[10px]">
                    <h1 className="text-[12px] text-left lg:text-right lg:text-[24px] leading-[100%]">
                      {el.name}
                    </h1>
                    <p className="text-[9px] text-left lg:text-right font-light lg:text-[16px] tracking-[0%] leading-[120%] lg:tracking-[-5%] lg:leading-[100%]">
                      {el.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex lg:justify-end">
              <button
                onClick={handleClick}
                className="text-light text-white cursor-pointer lg:text-[16px] text-[12px] leading-[120%] lg:leading-[100%] tracking-[0px] lg:tracking-[-0.5px] w-[144px] h-[34px] md:w-[168px] md:h-[43px] font-light md:rounded-[12px] rounded-[6px] bg-[#1A1A1A]"
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
