import { useState } from "react";
import { usePDF } from "react-to-pdf";
import Cv from "./components/Cv";
import Form from "./components/Form";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    titleOfStudy: "",
    yearOfStudy: "",
  });
  const [work, setWork] = useState({
    company: "",
    position: "",
    from: "",
    to: "",
  });
  const handleGeneralInfo = (e) => {
    // console.log(e.target.name, e.target.value);
    setGeneral((prevGeneral) => ({
      ...prevGeneral,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEducationInfo = (e) => {
    // console.log(e.target.name, e.target.value);
    setEducation((prevEducation) => ({
      ...prevEducation,
      [e.target.name]: e.target.value,
    }));
  };
  const handleWorkChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setWork((prevWork) => ({
      ...prevWork,
      [e.target.name]: e.target.value,
    }));
  };
  const onClickPdf = (e) => {
    e.preventDefault();
    toPDF();
  };
  return (
    <main>
      <Form
        onGeneralChange={handleGeneralInfo}
        onEducationChange={handleEducationInfo}
        onWorkChange={handleWorkChange}
        onClickPdf={onClickPdf}
      />
      <Cv
        targetRef={targetRef}
        general={general}
        education={education}
        work={work}
      />
    </main>
  );
}

export default App;
