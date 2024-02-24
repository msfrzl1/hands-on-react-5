import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="navbar-link">
        <p>Home</p>
      </Link>
      <Link to={"/menu"} className="navbar-link">
        <p>Menu</p>
      </Link>
      <Link to={"/login"} className="navbar-link">
        <p>Login</p>
      </Link>
    </div>
  );
};
export default Navbar;
