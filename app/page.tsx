import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { ExplanationSection } from "@/components/explanation-section";
import { RecommendationsSection } from "@/components/recommendations-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CallPrepSection } from "@/components/call-prep-section";
import { FaqSection } from "@/components/faq-section";
import { SourcesSection } from "@/components/sources-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <ExplanationSection />
      <RecommendationsSection />
      <BenefitsSection />
      <CallPrepSection />
      <FaqSection />
      <SourcesSection />
    </main>
  );
}
