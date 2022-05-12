import "./Signn.css";
import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export const Sign = () => {
  const [user, setUser] = useState({
    // firstName: '',
    // lastName: '',
    // email: '',
    // password: '',
    // mobile: '',
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    let inputName = e.target.name;
    setUser({
      ...user,
      [inputName]: e.target.value,
    });
  };

  const postData = async ({ firstName, lastName, email, password, mobile }) => {
    try {
      let res = await fetch("https://bluefly-api.herokuapp.com/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          mobile,
        }),
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = user;
    postData(value);
    alert("Registration Successful");
  };

  return (
    <div className="main" style={{ marginBottom: "200px", marginTop: "150px" }}>
      <h1 className="head1">SIGNUP</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="label">FIRST NAME</label>
        <br></br>
        <input
          name="firstName"
          type="text"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <label className="label">LAST NAME</label>
        <br></br>
        <input
          name="lastName"
          type="text"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <label className="label">EMAIL</label>
        <br></br>
        <input
          name="email"
          type="text"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <label className="label">PASSWORD</label>
        <br></br>
        <input
          name="password"
          type="password"
          placeholder=""
          className="login_username"
          onChange={handelchange}
          width="800%"
        />
        <br></br>
        <br></br>
        <label className="label">PHONE NO.</label>
        <br></br>
        <input
          name="mobile"
          type="number"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <Link
          to={{
            pathname: `/login`,
          }}
        >
          <input type="submit" value={"SUBMIT"} className="login_submit" />
        </Link>
      </form>
      <br></br>
    </div>
  );
};
