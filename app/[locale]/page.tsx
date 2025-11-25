import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSummary from "@/components/AboutSummary";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <ProcessSection />
      <AboutSummary />
    </main>
  );
}
