import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link,  useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlelogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");
    let api = "http://localhost:8080/login";
    const response = axios.post(api, loginData);
    console.log(response);
    response
      .then((response) => {
        console.log(response.data.password);
        console.log(response);
        localStorage.setItem("token",response.data.token)
        if(response.data.matchPassword===true)
        {
          Navigate('/loginsucess')
          alert("password matchPath")
          console.log("password matched");
        }
        else
        {
          console.log("not matched");
        }
       
      })
      .catch((err) => {
        console.log("promse pending");
        alert("Something went wrong");
      });
    // console.log(item.token);
  };
  return (
    <>
      <div className="main_div">
        <div className="sub_of_main">
          <h1>LOGIN</h1>
          <form action="" className="input_form" method="post">
            <input
              type="email"
              name="email"
              id=""
              required={true}
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="password"
              name=""
              id=""
              required={true}
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            />
            <input
              type="submit"
              value="Login"
              className="submit_btn"
              onClick={handlelogin}
            />
          </form>
          <p>
            Don't have an account ? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
