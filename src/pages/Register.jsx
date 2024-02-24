import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container-login">
        <div className="form">
          <h1>Register</h1>
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="changepassword" placeholder="Change Password" />
          <p>
            Have a account already? <Link to="/login">login</Link>
          </p>
          <Button type="submit">Register</Button>
        </div>
      </div>
    </>
  );
};
export default Register;
