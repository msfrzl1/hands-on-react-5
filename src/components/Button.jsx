const Button = (props) => {
  const { children, type, onClick } = props;

  return (
    <button type={type} onClick={onClick} className="btn-login">
      {children}
    </button>
  );
};

export default Button;
