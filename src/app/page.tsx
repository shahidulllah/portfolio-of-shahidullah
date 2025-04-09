import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div>
      <BannerSection />
      <Skills />
      <AboutSection />
      <FeaturedProjects />
    </div>
  );
};

export default page;
