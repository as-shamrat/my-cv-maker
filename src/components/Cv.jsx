import Education from "./Education";
import General from "./General";
import Work from "./Work";

function Cv({ general, education, work, targetRef }) {
  return (
    <section ref={targetRef} className="cv">
      <General general={general} />
      <Education education={education} />
      <Work work={work} />
    </section>
  );
}

export default Cv;
