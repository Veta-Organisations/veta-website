import { useState, type ChangeEvent, type FormEvent } from "react";

const UserForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    const res = await fetch("http://localhost:8080/api/v1/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }), // backend expects { email }
    });

    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Error submitting waitlist:", err);
  }
};


  return (
    <main
      className="min-h-screen flex items-center justify-center"
      id="waitlist"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col space-y-6 md:space-y-8 items-center justify-center">
          <div className="bg-[#FF5D3F] w-[135px] text-center h-[24px] md:w-[145px] md:h-[29px] p-1 rounded-[6px] md:rounded-[8px]">
            <h1 className="text-white text-[12px] md:text-[14px] leading-[120%]">
              Join the Revolution
            </h1>
          </div>

          <div className="text-center space-y-3 max-w-[301px] md:max-w-[846px]">
            <h1 className="md:text-[48px] font-bold text-[21px] leading-[120%] md:leading-[100%] text-center max-w-[238px] md:max-w-[500px] mx-auto">
              Be the First to Experience{" "}
              <span className="text-[#FF5D3F]">VETA</span>
            </h1>
            <p className="text-[12px] md:text-[21px] font-light tracking-[0%] leading-[120%] md:leading-[100%] max-w-[300px] md:max-w-[808px] mx-auto">
              Be among the first to experience stress-free shopping with
              flexible payments. Join our exclusive waitlist and unlock early
              member rewards.
            </p>
          </div>

          <div className="w-full max-w-[846px]">
            <form
              id="email"
              className="relative w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="w-full h-[40px] md:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black placeholder:text-gray-500"
                type="email"
                placeholder="Enter your Email Address"
                name="email"
                value={email}
                id="email"
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="absolute cursor-pointer right-2 md:right-3 top-1/2 transform -translate-y-1/2 w-[70px] md:w-[176px] h-[30px] md:h-[60px] bg-[#FF5D3F] text-white rounded-[8px] md:rounded-[16px] text-[10px] md:text-[16px] font-medium hover:bg-[#E54A2E] transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserForm;
