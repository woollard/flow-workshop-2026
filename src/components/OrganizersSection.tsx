import { ExternalLink } from "lucide-react";

const base = import.meta.env.BASE_URL;

const organizers = [
  {
    name: "David Woollard",
    affiliation: "Standard AI",
    role: "CTO",
    website: "https://dmwoollard.com",
    photo: `${base}assets/david_woollard.jpg`,
  },
  {
    name: "Francesco Zanlungo",
    affiliation: "University of Palermo / ATR",
    role: "Assistant Professor",
    website: "https://zanlungo.github.io",
    photo: `${base}assets/francesco_zanlungo.jpeg`,
  },
  {
    name: "Luis Morales",
    affiliation: "Standard AI",
    role: "Research Scientist",
    website: "https://sites.google.com/site/yoichimorales/",
    photo: `${base}assets/luis_morales.jpeg`,
  },
  {
    name: "Gustavo García",
    affiliation: "Ritsumeikan University",
    role: "Associate Professor",
    website: "http://www.tavogarcia.com/",
    photo: `${base}assets/gustavo_garcia.jpeg`,
  },
];

const OrganizersSection = () => (
  <section id="organizers" className="py-20 section-alt scroll-mt-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">
        Organizing Committee
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {organizers.map((org) => (
          <div key={org.name} className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-primary transition-colors">
              <img
                src={org.photo}
                alt={org.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-foreground">{org.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{org.role}</p>
            <p className="text-sm text-muted-foreground font-body">{org.affiliation}</p>
            <a
              href={org.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-primary hover:text-primary/80 text-sm font-body inline-flex items-center gap-1"
            >
              Website <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersSection;
