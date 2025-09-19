import AboutUs1 from "@/compo/About";
import ContactUs1 from "@/compo/Contact";
import Faq3 from "@/compo/FAQ";
import HeroGeometric from "@/compo/Hero";
import Feature3 from "@/compo/KeyFeatures";
import CongestedPricing from "@/compo/Pricing";
import FeatureSteps from "@/compo/StepFeatures";
import Team1 from "@/compo/Team";
import TestimonialsCarousel from "@/compo/Testimonial";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroGeometric/>
      <AboutUs1/>
      <FeatureSteps/>
      <Feature3/>
      <Team1/>
      <CongestedPricing/>
      <TestimonialsCarousel/>
      <ContactUs1/>
      <Faq3/>
    </div>
  );
}
