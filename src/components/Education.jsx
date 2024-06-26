function Education({ education }) {
  return (
    <div>
      <h1>Education</h1>
      <p>School Name: {education.school}</p>
      <p>Time of Study: {education.titleOfStudy}</p>
      <p>Year of Study: {education.yearOfStudy}</p>
    </div>
  );
}

export default Education;
