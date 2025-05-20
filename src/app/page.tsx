import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";

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
