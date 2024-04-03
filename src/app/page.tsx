import Hero from "@/components/LandingPage/Hero";
import CollectionSlide from "@/components/LandingPage/CollectionSlide";
import Backlay from "@/components/Backlay/Backlay";
import Pdf from "@/components/LandingPage/Pdfs";
import Share from "@/components/LandingPage/Share";
import QueryFeature from "@/components/LandingPage/QueryFeature";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center flex-col font-poppins">
        <Backlay />
        <Hero />
        <div className="container">
          <CollectionSlide />
          <Pdf />
          <Share />
          <QueryFeature />
        </div>
      </div>
      <Footer />
    </div>
  );
}
