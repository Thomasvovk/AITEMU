import "../Content/Content.scss";

function Content({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

export default Content;
