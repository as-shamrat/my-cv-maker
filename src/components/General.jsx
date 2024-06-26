function General({ general }) {
  return (
    <div>
      <h1>About Me</h1>
      <p>Name: {general.name}</p>
      <p>Email: {general.email}</p>
      <p>Phone: {general.phone}</p>
    </div>
  );
}

export default General;
