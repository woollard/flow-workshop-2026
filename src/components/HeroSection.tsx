const base = import.meta.env.BASE_URL;

const HeroSection = () => (
  <section className="relative hero-bg min-h-[85vh] flex items-center justify-center overflow-hidden">
    {/* Background video */}
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-20 mix-blend-lighten"
      >
        <source src={`${base}header.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-bg opacity-60" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm">
        <span className="text-primary-foreground/80 text-sm font-body font-medium tracking-wide">
          IROS 2026 Workshop
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-5xl mx-auto mb-4">
        FLOW: From Local Observations
        <br />
        to World Models
      </h1>

      <p className="text-lg sm:text-xl text-primary-foreground/70 font-body font-light max-w-2xl mx-auto mb-8">
        Learning Navigation Priors from Human Motion
      </p>

      <div className="flex flex-wrap gap-4 justify-center text-sm text-primary-foreground/60 font-body">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Co-located with IROS 2026
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Half-Day Workshop
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Sunday, Sept. 27, 2026 -  Time TBD
        </span>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
