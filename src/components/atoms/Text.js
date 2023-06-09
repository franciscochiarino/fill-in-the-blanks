const Heading = ({ text }) => {
  return (
    <h1 className="is-family-code has-text-centered is-size-1 has-text-weight-bold pl-4 pt-4">{text}</h1>
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

const Input = ({ onChange, name }) => {
  return (
    <input
      className="input is-primary is-small is-rounded ml-2 mr-2 has-text-centered"
      type="text"
      onChange={onChange}
      name={name || 'answer'}
      style={{ width: '100px', verticalAlign: 'middle' }}
    />
  )
}

const Text = {}
Text.Heading = Heading;
Text.SubHeading = SubHeading;
Text.Span = Span;
Text.Input = Input;

export default Text;
