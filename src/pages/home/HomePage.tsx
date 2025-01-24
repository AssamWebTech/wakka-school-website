import FaqSection from "../../components/faq/FaqSection";
import Gallery from "../../components/gallery/Gallery";
import HeroSection from "../../components/herosection/HeroSection";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeroSection /> 
      </div>
      <Gallery />
      <FaqSection/>
    </div>
  );
};

export default HomePage;
