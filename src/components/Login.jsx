import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuth, setName } from "../Redux/action";

function Login() {
  const { auth, token, name } = useSelector((state) => state);
  // console.log("name:", name);
  // console.log("token:", token);
  // console.log("auth:", auth);

  const dispatch = useDispatch();

  const [details, setdetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setdetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("details:", details);
    try {
      fetch("https://reqres.in/api/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(details),
      })
        .then((d) => d.json())
        .then((res) => {
          console.log("res:", res);
          if (res.error) {
            alert(res.error);
          } else {
            alert("Login successfully");
            dispatch(setAuth(res.token));
            let username = details.email.split("@")[0];
            // console.log("username:", username);
            dispatch(setName(username));
          }
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  if (auth) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={details.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          value={details.password}
          onChange={handleChange}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
