import WorkshopNav from "@/components/WorkshopNav";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import SpeakersSection from "@/components/SpeakersSection";
import CFPSection from "@/components/CFPSection";
import ChallengeSection from "@/components/ChallengeSection";
import DatesSection from "@/components/DatesSection";
import OrganizersSection from "@/components/OrganizersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WorkshopNav />
      <HeroSection />
      <AbstractSection />
      <SpeakersSection />
      <CFPSection />
      <ChallengeSection />
      <DatesSection />
      <OrganizersSection />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-body">
            FLOW Workshop @ IROS 2026 — From Local Observations to World Models
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
