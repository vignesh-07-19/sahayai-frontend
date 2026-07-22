import { useNavigate } from "react-router-dom";
import { GraduationCap, HeartPulse, Landmark, Wallet } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen flex items-center pt-24"
      id="hero"
      style={{ backgroundColor: "#FFF9F5" }}
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-[#1F2937]">
              Find Government
              <br />
              Schemes You're
              <br />
              Eligible For.
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600 max-w-xl">
              Answer a few questions and discover scholarships,
              pensions, healthcare benefits and welfare schemes
              that match your profile—all in under a minute.
            </p>

            <button
              onClick={() => navigate("/eligibility")}
              className="mt-12 bg-[#1F2937] hover:bg-black text-white px-10 py-4 rounded-full text-lg font-semibold transition"
            >
              Check Your Eligibility →
            </button>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl border border-[#EFE2D6] shadow-lg p-8 w-full max-w-md">

              <h2 className="text-3xl font-bold text-[#1F2937]">
                Popular Schemes
              </h2>

              <p className="text-gray-500 mt-2">
                Some of the categories people search for the most.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="bg-[#FFF5EB] p-3 rounded-full">
                    <GraduationCap className="text-[#1F2937]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Scholarships</p>
                    <p className="text-sm text-gray-500">For students in school or college</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="bg-[#FFF5EB] p-3 rounded-full">
                    <HeartPulse className="text-[#1F2937]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Healthcare Benefits</p>
                    <p className="text-sm text-gray-500">Medical coverage and insurance schemes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="bg-[#FFF5EB] p-3 rounded-full">
                    <Landmark className="text-[#1F2937]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Pension Schemes</p>
                    <p className="text-sm text-gray-500">For senior citizens and retirees</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#FFF5EB] p-3 rounded-full">
                    <Wallet className="text-[#1F2937]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Financial Assistance</p>
                    <p className="text-sm text-gray-500">Loans, subsidies and welfare funds</p>
                  </div>
                </div>

              </div>

              <div className="mt-8 bg-[#1F2937] text-white rounded-xl py-3 text-center font-semibold">
                200+ Schemes Listed
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;