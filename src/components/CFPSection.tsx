import { FileText, FlaskConical, Trophy } from "lucide-react";

const tracks = [
  {
    icon: FileText,
    title: "Extended Abstracts",
    desc: "2-page abstracts presenting preliminary results, position statements, or work-in-progress.",
  },
  {
    icon: FlaskConical,
    title: "Emerging Results Papers",
    desc: "Up to 6-page papers presenting new methods, analysis, or empirical findings.",
  },
  {
    icon: Trophy,
    title: "Challenge Reports",
    desc: "Short reports describing methods and results from the FLOW Shared-Space Navigation Challenge.",
  },
];

const topics = [
  "Human trajectory analysis and pedestrian dynamics",
  "Statistical models of human movement and crowd behavior",
  "Learning navigation priors from human motion data",
  "Flow fields and motion pattern extraction",
  "Social robot navigation in human environments",
  "Data-driven planning for robots in shared spaces",
  "Trajectory prediction and forecasting",
  "Benchmarks and evaluation for social navigation",
  "Sim-to-real transfer for navigation in crowds",
  "Human-robot interaction in pedestrian environments",
];

const CFPSection = () => (
  <section id="cfp" className="py-20 scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
        Call for Papers
      </h2>
      <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
        We invite submissions exploring the intersection of human motion analysis, data-driven navigation, 
        and robot behavior in shared environments.
      </p>

      {/* Tracks */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <track.icon className="text-primary mb-3" size={24} />
            <h3 className="font-display font-semibold text-foreground mb-2">{track.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{track.desc}</p>
          </div>
        ))}
      </div>

      {/* Topics */}
      <h3 className="font-display font-semibold text-foreground text-xl mb-4">Topics of Interest</h3>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-10">
        {topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {topic}
          </li>
        ))}
      </ul>

      {/* Submission info */}
      <div className="bg-muted rounded-lg p-6 space-y-2">
        <p className="text-sm text-muted-foreground font-body">
          <strong className="text-foreground">Peer Review:</strong> All submissions will undergo lightweight peer review by members of the workshop program committee.
        </p>
        <p className="text-sm text-muted-foreground font-body">
          <strong className="text-foreground">Submission Platform:</strong> Submissions will be managed via{" "}
          <span className="text-primary font-medium">OpenReview</span>. Link coming soon.
        </p>
        <p className="text-sm text-muted-foreground font-body">
          <strong className="text-foreground">Submission Dates:</strong> TBD — see the Dates section below.
        </p>
      </div>
    </div>
  </section>
);

export default CFPSection;
