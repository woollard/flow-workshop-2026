import { Users } from "lucide-react";

const SpeakersSection = () => (
  <section id="speakers" className="py-20 section-alt scroll-mt-16">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4">
        Invited Speakers
      </h2>
      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
          <Users className="text-muted-foreground" size={32} />
        </div>
        <p className="text-lg text-muted-foreground font-body">
          Speaker lineup to be announced soon.
        </p>
        <p className="text-sm text-muted-foreground/70 font-body">
          We are assembling an exciting lineup of researchers in robot navigation, pedestrian dynamics, and learning-based behavior modeling. Stay tuned!
        </p>
      </div>
    </div>
  </section>
);

export default SpeakersSection;
