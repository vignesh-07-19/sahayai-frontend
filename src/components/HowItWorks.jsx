function LivePreview() {
  return (
    <section
      className="py-32"
      id="how-it-works"
      style={{ backgroundColor: "#FFF9F5" }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-widest text-amber-600 font-semibold">
            How It Works
          </p>

          <h2 className="text-5xl font-bold mt-5 text-gray-900">
            From Profile to Eligible Schemes
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            SahayAI analyzes the information you provide and matches it against
            government welfare schemes to find benefits you may be eligible for.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl border border-[#EFE1D6] p-8 shadow-sm">

            <div className="text-4xl mb-5">01</div>

            <h3 className="text-2xl font-bold text-gray-900">
              Complete Your Profile
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Enter details like your state, age, occupation, education,
              income, category and gender through a simple eligibility form.
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#EFE1D6] p-8 shadow-sm">

            <div className="text-4xl mb-5">02</div>

            <h3 className="text-2xl font-bold text-gray-900">
              Eligibility Matching
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Your profile is processed and matched against government scheme
              eligibility criteria stored in our database.
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#EFE1D6] p-8 shadow-sm">

            <div className="text-4xl mb-5">03</div>

            <h3 className="text-2xl font-bold text-gray-900">
              View Matching Schemes
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Instantly explore the schemes that match your profile, along with
              benefits, required documents and official application links.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LivePreview;