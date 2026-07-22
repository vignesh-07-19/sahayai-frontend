function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "#FFF9F5" }}
    >
      <div className="max-w-4xl mx-auto px-8">

        <div className="bg-white border border-[#EFE2D6] rounded-3xl shadow-sm p-10">

          <h2 className="text-4xl font-bold text-[#1F2937]">
            Questions or Feedback?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            SahayAI was built to simplify the process of discovering government
            schemes. If you have suggestions, find an issue, or would like to
            connect, feel free to reach out.
          </p>

          <div className="mt-10 space-y-8">

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Email
              </p>

              <a
                href="mailto:vigneshgouthammantha@gmail.com"
                className="mt-2 inline-block text-xl font-semibold text-[#1F2937] hover:text-[#D98C3F] transition"
              >
                vigneshgouthammantha@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                GitHub
              </p>

              <a
                href="https://github.com/vignesh-07-19"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-[#1F2937] hover:text-[#D98C3F] transition"
              >
                github.com/vignesh-07-19
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/vignesh-goutham-mantha-129438352/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-[#1F2937] hover:text-[#D98C3F] transition"
              >
                linkedin.com/in/vignesh-goutham-mantha-129438352
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;