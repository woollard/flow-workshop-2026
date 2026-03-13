//import sgRow0 from "@/assets/sg_row0.png";
//import sgRow14 from "@/assets/sg_row14.png";

const ChallengeSection = () => (
  <section id="challenge" className="py-20 section-alt scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
        FLOW Shared-Space Navigation Challenge
      </h2>
      <p className="text-center text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
        A benchmark for evaluating robot navigation in environments populated by real human trajectories.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img src="./assets/sg_row0.png" alt="Flow-aligned navigation scenario" className="rounded-lg border border-border shadow-sm" />
        <img src="./assets/sg_row14.png" alt="Cross-flow navigation scenario" className="rounded-lg border border-border shadow-sm" />
      </div>
      <p className="text-xs text-center text-muted-foreground/60 font-body mb-10">
        Representative benchmark scenarios: flow-aligned (left) and cross-flow (right) navigation tasks derived from real human trajectory data.
      </p>

      <div className="bg-card border border-border rounded-lg p-6 space-y-4 text-muted-foreground font-body text-[0.95rem] leading-relaxed">
        <p>
          Participants will be provided with recorded human trajectories together with start–goal navigation 
          tasks. Algorithms must generate robot trajectories that reach the goal safely and efficiently 
          while navigating among pedestrians.
        </p>
        <p>
          The benchmark includes scenarios such as flow-aligned navigation, cross-flow navigation, 
          counter-flow navigation, and corridor traversal — capturing the range of coordination challenges 
          robots face in shared pedestrian environments.
        </p>
        <p>
          Performance metrics include minimum human clearance, navigation success rate, and path efficiency 
          relative to a geometric baseline. A public leaderboard will be maintained to compare approaches.
        </p>
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-primary">
            📢 Full challenge details, dataset, and evaluation scripts coming soon.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ChallengeSection;
