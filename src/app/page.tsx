import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import CertificationsSection from "@/components/home/CertificationSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import NewsletterSignupSection from "@/components/home/Newsletter";
import ServicesSection from "@/components/home/ServicesSection";
import Skills from "@/components/home/Skills";

const page = () => {
  return (
    <div>
      <BannerSection />
      <Skills />
      <AboutSection />
      <FeaturedProjects />
      <CertificationsSection/>
      <ServicesSection/>
      <NewsletterSignupSection/>
    </div>
  );
};

export default page;
