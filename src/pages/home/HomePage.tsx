import FaqSection from "../../components/faq/FaqSection";
import Gallery from "../../components/gallery/Gallery";
import HeroSection from "../../components/herosection/HeroSection";
import TeacherSection from "../../components/teachersection/TeacherSection";
import Infrastructure from "../../components/infrastructure/Infrastructure";
import NoticeBoard from "../../components/noticeboard/NoticeBoard";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeroSection /> 
      </div>
      <NoticeBoard />
      <Infrastructure />
      <TeacherSection />
      <Gallery />
      <FaqSection/>
    </div>
  );
};

export default HomePage;
