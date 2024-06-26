function Form({
  onGeneralChange,
  onEducationChange,
  onWorkChange,
  onClickPdf,
}) {
  return (
    <form onSubmit={onClickPdf}>
      <div className="form-group">
        <h3>General Information</h3>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onGeneralChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={onGeneralChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              onChange={onGeneralChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <h3>Educational Information</h3>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="school">School Name</label>
            <input
              type="text"
              id="school"
              name="school"
              onChange={onEducationChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="titleOfStudy">Title of Study</label>
            <input
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
              onChange={onEducationChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="yearOfStudy">Year of Study</label>
            <input
              type="date"
              id="yearOfStudy"
              name="yearOfStudy"
              onChange={onEducationChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <h3>Work Experience</h3>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={onWorkChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="position">Job Position</label>
            <input
              type="text"
              id="position"
              name="position"
              onChange={onWorkChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="from">From</label>
            <input type="date" name="from" id="from" onChange={onWorkChange} />
          </div>
          <div className="form-input">
            <label htmlFor="to">To</label>
            <input type="date" name="to" id="to" onChange={onWorkChange} />
          </div>
        </div>
      </div>
      <button type="submit">Save Cv</button>
    </form>
  );
}

export default Form;
