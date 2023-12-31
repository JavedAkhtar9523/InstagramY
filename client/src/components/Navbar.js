import React, { useContext } from "react";
import instagramLog from "../image/instagramLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Navbar = ({ login }) => {
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <Link to="profile">
            <li>Profile</li>
          </Link>
          <Link to="/createpost">
            <li>Create Post</li>
          </Link>
          <Link to={""}>
            {" "}
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>{" "}
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="signup">
            <li>SignUp</li>
          </Link>
          <Link to="signin">
            <li>SignIn</li>
          </Link>
        </>,
      ];
    }
  };

  return (
    <>
      <div className="navbar">
        <img src={instagramLog} alt="Logo" />
        <ul className="nav-menu">{loginStatus()}</ul>
      </div>
    </>
  );
};

export default Navbar;
