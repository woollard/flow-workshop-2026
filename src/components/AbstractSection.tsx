const AbstractSection = () => (
  <section id="abstract" className="py-20 scroll-mt-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
        Abstract
      </h2>
      <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-[1.05rem]">
        <p>
          Robots operating in human environments must navigate through spaces populated by people. 
          This workshop advances the thesis that large-scale observations of human movement can serve 
          as navigation priors for robots operating in such environments. Humans collectively form a 
          decentralized navigation system whose structure is encoded in statistical patterns of movement 
          observed in everyday environments.
        </p>
        <p>
          While research on social navigation has traditionally focused on designing interaction rules, 
          cost functions, or predictive models governing robot behavior around humans, recent advances in 
          sensing and perception systems now enable the collection of large-scale datasets capturing natural 
          human movement in environments such as retail spaces, transportation hubs, and public venues. 
          These datasets make it possible to study the statistical structure of human motion and explore how 
          it can inform robot navigation.
        </p>
        <p>
          The workshop will bring together researchers from robotics, pedestrian dynamics, and behavior 
          modeling to investigate how human trajectories can be used to derive navigation priors and improve 
          robot behavior in shared environments. A central component of the workshop will be the{" "}
          <strong className="text-foreground">FLOW Shared-Space Navigation Challenge</strong>, a benchmark 
          designed to evaluate robot navigation strategies in environments populated by real human trajectories.
        </p>
      </div>
    </div>
  </section>
);

export default AbstractSection;
