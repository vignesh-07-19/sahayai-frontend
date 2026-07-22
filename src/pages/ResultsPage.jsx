import { useLocation } from "react-router-dom";

function ResultsPage() {
  const { state } = useLocation();

  const schemes = state?.schemes || [];

  return (
    <div className="min-h-screen bg-[#FFF9F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Eligible Government Schemes
        </h1>

        {schemes.length === 0 ? (
          <p>No matching schemes found.</p>
        ) : (
          <div className="space-y-8">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl shadow p-8 border"
              >
                <h2 className="text-2xl font-bold">
                  {scheme.scheme_name}
                </h2>

                <p className="mt-3 text-gray-700">
                  {scheme.description}
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold">
                    Benefits
                  </h3>

                  <p>{scheme.benefits}</p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold">
                    Required Documents
                  </h3>

                  <p>{scheme.documents}</p>
                </div>

                <a
                  href={scheme.official_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
                >
                  Official Website
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default ResultsPage;