import { Calendar } from "lucide-react";

const dates = [
  { event: "Paper Submission Opens", date: "June 16, 2026", confirmed: true },
  { event: "Challenge Data Release", date: "June 16, 2026", confirmed: true },
  { event: "Paper Submission Deadline", date: "July 24, 2026 (AoE)", confirmed: false },
  { event: "Paper Notification", date: "August 14, 2026 (AoE)", confirmed: false },
  { event: "Challenge Deadline", date: "August 28, 2026 (AoE)", confirmed: false },
  { event: "Workshop Day", date: "September 27, 2026 (co-located with IROS 2026)", confirmed: true },
];

const DatesSection = () => (
  <section id="dates" className="py-20 scroll-mt-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">
        Important Dates
      </h2>
      <div className="space-y-0">
        {dates.map((d, i) => (
          <div
            key={d.event}
            className="flex items-start gap-4 relative"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full shrink-0 mt-1 ${d.confirmed ? "bg-primary" : "bg-border"}`} />
              {i < dates.length - 1 && (
                <div className="w-px h-full bg-border min-h-[3rem]" />
              )}
            </div>
            <div className="pb-6">
              <p className="font-display font-semibold text-foreground">{d.event}</p>
              <p className={`text-sm font-body ${d.confirmed ? "text-primary font-medium" : "text-muted-foreground"}`}>
                {d.confirmed && <Calendar className="inline mr-1 -mt-0.5" size={14} />}
                {d.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DatesSection;
