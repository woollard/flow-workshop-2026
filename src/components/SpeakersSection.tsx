import { Users } from "lucide-react";
//import elyImg from "@/assets/ely_repiso.jpg";

const base = import.meta.env.BASE_URL;

const SpeakersSection = () => (
  <section id="speakers" className="py-20 section-alt scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">
        Invited Speakers
      </h2>
      
      {/* Confirmed Speaker */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
            <img
              src={`${base}assets/ely_repiso.jpg`}
              alt="Dr. Ely Repiso"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display font-semibold text-xl text-foreground mb-1">
              Dr. Ely Repiso
            </h3>
            <p className="text-sm text-primary font-body mb-3">
              Tenure-track Lecturer, Universitat Politècnica de Catalunya (UPC)
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Dr. Ely Repiso's research focuses on robot navigation and human–robot interaction in dynamic environments populated by people. She received her Ph.D. in Collaborative Social Robot Navigation from UPC in 2020. Following her Ph.D., she worked as a postdoctoral researcher at LAAS–CNRS (Toulouse) on AI for human–robot interaction and previously conducted research at ATR in Japan with Takayuki Kanda. Her work investigates people tracking, human motion prediction, and socially-aware robot navigation.
            </p>
          </div>
        </div>
      </div>

      {/* More Speakers Coming Soon */}
      <div className="text-center pt-8 border-t border-border">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <Users className="text-muted-foreground" size={24} />
          </div>
          <p className="text-sm text-muted-foreground font-body">
            Additional speakers to be announced soon
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SpeakersSection;
