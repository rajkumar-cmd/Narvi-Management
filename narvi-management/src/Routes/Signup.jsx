import { Link, NavLink } from "react-router-dom";
import React from "react"
import Style from "../Styles/Signup.module.css";

const Signup = () => {
  const [disablebtn, setDisablebtn] = React.useState(false);
  const [details, setDetails] = React.useState({
    email: "",
    password: ""
  });
  // const [token,setToken]=React.useState("");
  const handleChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    setDetails({ ...details, [type]: value });
  }
  console.log(details);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisablebtn(true);
    storeData();
  }
  const storeData = () => {
    // fetch("https://reqres.in/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(details)
    // }).then(function (res) {
    //   return res.json();
    // }).then(function (res) {
    //   val.handleToken(res.token);
    //   val.handleAuth();
    // })
    localStorage.setItem(details.email, details.password);
    details.email="";
    details.password="";
  }
  return (
    <div className={Style.loginPage}>
      <div className={Style.login}>
        <div>
          <h1 className={Style.header}>Sign up</h1>
          <p className={Style.para}>Enjoy all our services</p>
        </div>
        <form className={Style.form} onSubmit={handleSubmit}>
          <div>
            <label>
              <div className={Style.text}>
                <p>Email</p>
              </div>
              <input
                className={Style.input}
                type="email"
                value={details.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email" />
            </label>
          </div>
          <div>
            <label>
              <div className={Style.text}>
                <p>Password</p>
              </div>
              <input
                className={Style.input}
                type="password"
                placeholder="Password"
                value={details.password}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div>
            <button
              className={Style.submit}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className={Style.messagediv}>
          <Link className={Style.message} to="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup