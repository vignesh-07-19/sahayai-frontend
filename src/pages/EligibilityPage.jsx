import { useState } from "react";
import { useNavigate } from "react-router-dom";
import states from "../data/states";

function EligibilityPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: "",
    age: "",
    occupation: "",
    education: "",
    income: "",
    category: "",
    gender: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age),
          income: Number(formData.income),
        }),
      });

      const data = await response.json();

      navigate("/results", {
        state: data,
      });

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-[#EFE2D6] rounded-xl shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </button>

        <h1 className="text-5xl font-bold text-gray-900">
          Check Your Eligibility
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Tell us about yourself and SahayAI will analyze your profile to
          recommend the most relevant government schemes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white rounded-3xl border border-[#EFE2D6] shadow-sm p-10"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <label className="block mb-2 font-medium">
                State
              </label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              >
                <option value="">Select State</option>

                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full border border-gray-300 rounded-xl p-4"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <label className="block mb-2 font-medium">
                Occupation
              </label>

              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              >
                <option value="">Select Occupation</option>
                <option>Student</option>
                <option>Farmer</option>
                <option>Private Employee</option>
                <option>Government Employee</option>
                <option>Business Owner</option>
                <option>Self Employed</option>
                <option>Homemaker</option>
                <option>Daily Wage Worker</option>
                <option>Retired</option>
                <option>Unemployed</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Education
              </label>

              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              >
                <option value="">Select Education</option>
                <option>No Formal Education</option>
                <option>Primary School</option>
                <option>High School</option>
                <option>Intermediate</option>
                <option>Diploma</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Doctorate (PhD)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <label className="block mb-2 font-medium">
                Annual Family Income (₹)
              </label>

              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                placeholder="e.g. 180000"
                className="w-full border border-gray-300 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-4"
              >
                <option value="">Select Category</option>
                <option>General</option>
                <option>EWS</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>Minority</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <label className="block mb-2 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-8">
            <label className="block mb-2 font-medium">
              Describe Your Situation
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              placeholder="Example: I am a second-year engineering student from Telangana. My family's annual income is ₹1.8 lakh and I am looking for scholarships."
              className="w-full border border-gray-300 rounded-xl p-4 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-10 w-full bg-[#1F2937] text-white py-4 rounded-xl font-semibold text-lg hover:bg-black transition"
          >
            Analyze My Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EligibilityPage;