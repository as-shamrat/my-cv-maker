function Work({ work }) {
  return (
    <div>
      <h1>Work Experience</h1>
      <p>Company Name: {work.company}</p>
      <p>Job Position: {work.position}</p>
      <p>
        Duration: {work.from} - {work.to}
      </p>
    </div>
  );
}

export default Work;
