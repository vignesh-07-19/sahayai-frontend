function TrustBar() {
  return (
    <section
      className="py-20"
      id="features"
      style={{ backgroundColor: "#FFF4EC" }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-8 text-center border border-[#F1E2D6]">

            <h2 className="text-4xl font-bold text-gray-900">
              2,500+
            </h2>

            <p className="mt-3 text-gray-600">
              Government Schemes
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border border-[#F1E2D6]">

            <h2 className="text-4xl font-bold text-gray-900">
              28
            </h2>

            <p className="mt-3 text-gray-600">
              States Covered
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border border-[#F1E2D6]">

            <h2 className="text-4xl font-bold text-gray-900">
              100+
            </h2>

            <p className="mt-3 text-gray-600">
              Scholarship Programs
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border border-[#F1E2D6]">

            <h2 className="text-4xl font-bold text-gray-900">
              AI
            </h2>

            <p className="mt-3 text-gray-600">
              Personalized Matching
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustBar;