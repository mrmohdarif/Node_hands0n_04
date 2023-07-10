import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const Navigate = useNavigate();
  const handleuser = (e) => {
    //  console.log(e.target.value);
    
    setUser(e.target.value);
  };

  const handleemail = (e) => {
    // console.log(e.target.value);
    
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    // console.log(e.target.value);
    
    setPassword(e.target.value);
  };
  const handlephone = (e) => {
    // console.log(e.target.value);

    setTel(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const userData = {
      user: user,
      email: email,
      password: password,
      tel: tel,
    };

    setUser("");
    setEmail("");
    setTel("");
    setPassword("");
    let api = "http://localhost:8080/register";
    const response = axios.post(api, userData);
    response
      .then((data) => {

        console.log(data);
        
        Navigate("/Sucessregister");
      })
      .catch((err) => {
        console.log(err);
      });
 
  };
  //  axios.post('')

  return (
    <>
      <div className="main_div">
        <div className="sub_of_main">
          <h1>Register</h1>
          <form action="" className="input_form" method="post">
            <input
              type="text"
              name="userName"
              id="name"
              placeholder="Username"
              onChange={handleuser}
              value={user}
              required={true}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleemail}
              value={email}
              required={true}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handlepassword}
              value={password}
              required={true}

            />
            <input
              type="tel"
              name="phone_number"
              id="phone"
              placeholder="Phone"
              onChange={handlephone}
              value={tel}
              required={true}
            />
            <input
              type="submit"
              value="Signup"
              className="submit_btn"
              onClick={onsubmit}
            />
          </form>
          <p>
            <Link to="/login">Already have an account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
