import AboutSection from "@/components/home/AboutSection";
import BannerSection3 from "@/components/home/BannerSection3";
import CertificationsSection from "@/components/home/CertificationSection";
import FaqSection from "@/components/home/FaqSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import NewsletterSignupSection from "@/components/home/Newsletter";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsOrbit from "@/components/home/SkillsOrbit";
import ImageUploader from "@/components/ImageUploader";

const page = () => {
  return (
    <div>
      <BannerSection3 />
      <SkillsOrbit/>
      <AboutSection />
      <FeaturedProjects />
      <CertificationsSection />
      <ServicesSection />
      <FaqSection />
      <NewsletterSignupSection />
      <ImageUploader/>
    </div>
  );
};

export default page;
