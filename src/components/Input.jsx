const Input = (props) => {
  const { type, placeholder, onChange } = props;
  return <input type={type} placeholder={placeholder} onChange={onChange} className="input" />;
};
export default Input;
