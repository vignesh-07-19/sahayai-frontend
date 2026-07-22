import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import HowItWorks from "../components/HowItWorks";
import LivePreview from "../components/LivePreview";
import Contact from "../components/Contact";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <LivePreview />
      <Contact />
    </>
  );
}

export default LandingPage;