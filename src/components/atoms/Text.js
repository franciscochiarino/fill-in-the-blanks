const Heading = ({ children }) => {
  return (
    <h1 className="is-family-code has-text-centered is-size-1 has-text-weight-bold pl-4 pt-4">{children}</h1>
  )
};

const SubHeading = ({ text }) => {
  return (
    <h2 className="is-family-code is-size-3 mb-4">{text}</h2>
  )
};

const Span = ({ children }) => {
  return (
    <span style={{ lineHeight: '2.2' }}>{children}</span>
  )
};


const Text = {}
Text.Heading = Heading;
Text.SubHeading = SubHeading;
Text.Span = Span;

export default Text;
