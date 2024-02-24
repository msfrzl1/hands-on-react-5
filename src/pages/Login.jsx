import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        setNotif("Login Berhasil");
        const token = res?.data?.data?.token;
        setTimeout(() => {
          if (token) {
            navigate("/menu");
          }
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container-login">
        {!!notif.length && <h1>{notif}</h1>}
        <div className="form">
          <h1>Login</h1>
          <Input type="text" placeholder="username" onChange={handleUsername} />
          <Input type="password" placeholder="*******" onChange={handlePassword} />
          <p>
            Dont Have a account already? <Link to="/register">Register</Link>
          </p>
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
