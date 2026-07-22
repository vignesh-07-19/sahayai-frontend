function LivePreview() {
  return (
    <section
      className="py-32"
      id="live-preiview"
      style={{ backgroundColor: "#FFF9F5" }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-widest text-amber-600 font-semibold">
            Eligibility Matching
          </p>

          <h2 className="text-5xl font-bold mt-5 text-gray-900">
            See What You'll Receive
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            After completing the eligibility form, SahayAI matches your profile
            with government schemes and presents everything you need in one place.
          </p>

        </div>

        <div className="mt-20 bg-white rounded-3xl border border-[#EFE1D6] shadow-sm p-10">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <div>

              <h3 className="text-2xl font-bold text-gray-900">
                Your Profile
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">State</span>
                  <span className="font-semibold">Telangana</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Occupation</span>
                  <span className="font-semibold">Student</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Education</span>
                  <span className="font-semibold">Undergraduate</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Income</span>
                  <span className="font-semibold">₹1,80,000</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Category</span>
                  <span className="font-semibold">SC</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <h3 className="text-2xl font-bold text-gray-900">
                Matching Results
              </h3>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <p className="font-semibold text-gray-900">
                    ✓ Post Matric Scholarship
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Tuition fee assistance and maintenance allowance.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <p className="font-semibold text-gray-900">
                    ✓ Ayushman Bharat
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Health insurance coverage for eligible families.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <p className="font-semibold text-gray-900">
                    ✓ National Scholarship Scheme
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Financial support for higher education.
                  </p>
                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-[#1F2937] text-white p-5 text-center">

                <p className="text-3xl font-bold">
                  3
                </p>

                <p className="mt-2">
                  Eligible schemes found
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LivePreview;