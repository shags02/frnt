import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creds.name,
        email: creds.email,
        password: creds.password,
        location: creds.location
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid data");
    }
  };

  const onChange = (event) => {
    setcreds({ ...creds, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={creds.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={creds.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={creds.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={creds.location}
              onChange={onChange}
              
             
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-secondary">
            Already a user?
          </Link>
        </form>
      </div>
    </>
  );
}
