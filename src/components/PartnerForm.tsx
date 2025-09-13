import React, { useState } from "react";

interface Form {
  businessName: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  businessCategory: string;
}

const categories = ["Electronics", "Food", "Gadgets"];

const PartnerForm = () => {
  const [formData, setFormData] = useState<Form>({
    businessName: "",
    contactPerson: "",
    businessEmail: "",
    phoneNumber: "",
    businessCategory: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <main className="min-h-screen flex flex-col items-center gap-[71px] justify-center pt-[100px] pb-10 md:pt-[120px] px-4">
      <div className="w-full max-w-6xl">
        <div className="text-center flex flex-col items-center justify-center gap-[5px] mb-10">
          <h1 className="lg:text-[47px] text-[21px] leading-[120%]">
            Become a <span className="text-[#FF5D3F]">VETA</span> Partner
          </h1>
          <p className="text-light text-center text-[9px] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[-0.5%]">
            Join our vendor waitlist and start reaching ready-to-buy customers
            with flexible payments built for growth
          </p>
        </div>

        <div className="w-full max-w-[846px] mx-auto">
          <div className="w-full" onSubmit={handleSubmit}>
            <div className="mb-[16px] lg:mb-[28px] flex flex-col justify-center gap-[6px] lg:gap-[10px]">
              <label
                htmlFor="businessName"
                className="text-[7px] leading-[120%] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[0.5%] font-light text-[#1A1A1A]"
              >
                Business Name
              </label>
              <input
                className="w-full h-[50px] lg:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black placeholder:text-gray-500"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                id="businessName"
              />
            </div>

            <div className="mb-[16px] lg:mb-[28px] flex flex-col justify-center gap-[6px] lg:gap-[10px]">
              <label
                className="text-[7px] leading-[120%] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[0.5%] font-light text-[#1A1A1A]"
                htmlFor="contactPerson"
              >
                Contact Person
              </label>
              <input
                className="w-full h-[50px] lg:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black placeholder:text-gray-500"
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Contact Person"
                id="contactPerson"
              />
            </div>

            <div className="mb-[16px] lg:mb-[28px] flex flex-col justify-center gap-[6px] lg:gap-[10px]">
              <label
                className="text-[7px] leading-[120%] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[0.5%] font-light text-[#1A1A1A]"
                htmlFor="businessEmail"
              >
                Email
              </label>
              <input
                className="w-full h-[50px] lg:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black placeholder:text-gray-500"
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="Business Email"
                id="businessEmail"
              />
            </div>

            <div className="mb-[16px] lg:mb-[28px] flex flex-col justify-center gap-[6px] lg:gap-[10px]">
              <label
                className="text-[7px] leading-[120%] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[0.5%] font-light text-[#1A1A1A]"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="w-full h-[50px] lg:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black placeholder:text-gray-500"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                id="phoneNumber"
              />
            </div>

            {/* Dropdown with "Select Category" and borders */}
            <div className="mb-[16px] lg:mb-[28px] flex flex-col justify-center gap-[6px] lg:gap-[10px]">
              <label
                className="text-[7px] leading-[120%] tracking-normal lg:text-[16px] lg:leading-[100%] lg:tracking-[0.5%] font-light text-[#1A1A1A]"
                htmlFor="businessCategory"
              >
                Business Category
              </label>
              <select
                className="w-full h-[40px] md:h-[80px] text-[12px] md:text-[16px] px-4 pr-[80px] md:pr-[200px] rounded-[10px] md:rounded-[20px] bg-[#E6E6E6] text-black"
                name="businessCategory"
                value={formData.businessCategory}
                onChange={handleChange}
                id="businessCategory"
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option
                    key={index}
                    value={category}
                    className="bg-[#E6E6E6] rounded-[20px]"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="lg:w-[183px] text-[12px] lg:text-[16px] cursor-pointer w-[158px] h-[36px] md:h-[51px] mt-6 bg-[#FF5D3F] text-white font-medium rounded-[6px] md:rounded-[12px] hover:bg-[#e54d2e] transition-colors"
              >
                Apply as vendor
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PartnerForm;
