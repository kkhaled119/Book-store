const HeadingTitle = ({ title }) => {
  return (
    <div style={divStyles}>
      <h2 styke={h2Styles}>{title}</h2>
    </div>
  );
};

const divStyles = {
  padding: "10px 30px",
  backgroundColor: "#fff",
};

const h2Styles = {
  color: "#1926d2",
  fontSize: "30px ",
  fontWight: "500",
  borderBottom: "2px solid  #1926d2 ",
  width: "max-content",
  paddingBottom: "5px",
};

export default HeadingTitle;
