import AboutSection from "@/components/home/AboutSection";
// import BannerSection from "@/components/home/BannerSection";
import BannerSectionV2 from "@/components/home/BannerSection3";
// import BannerSectionV1 from "@/components/home/BannerSection2";
// import BannerSectionV2 from "@/components/home/BannerSection3";
// import BannerSectionV3 from "@/components/home/BannerSection4";
import CertificationsSection from "@/components/home/CertificationSection";
import FaqSection from "@/components/home/FaqSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import NewsletterSignupSection from "@/components/home/Newsletter";
import ServicesSection from "@/components/home/ServicesSection";
import Skills from "@/components/home/Skills";
import ImageUploader from "@/components/ImageUploader";

const page = () => {
  return (
    <div>
      <BannerSectionV2 />
      <Skills />
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
