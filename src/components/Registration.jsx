import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Registration() {
  const [details, setdetails] = useState({
    email: "",
    password: "",
  });

  const [reg, setReg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("details:", details);
    try {
      fetch("https://reqres.in/api/register", {
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
            alert("Registered successfully");
            setReg(true);
          }
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setdetails({
      ...details,
      [name]: value,
    });
  };

  if (reg) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <h2>Regesteration</h2>
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
