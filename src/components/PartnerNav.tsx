import { useNavigate } from "react-router-dom";

const PartnerNav = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="fixed top-0 bg-white md:h-[75px] p-6 z-50 w-full">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div>
          <img src="/logo.png" className="w-[95px] h-[24px]" alt="Veta Logo" />
        </div>

        <div>
          <button
            onClick={handleGoBack}
            className="w-[133px] h-[43px] cursor-pointer text-white font-light rounded-[12px] bg-[#1A1A1A]"
          >
            Go back
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PartnerNav;
