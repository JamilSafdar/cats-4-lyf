import { Link } from "react-router-dom";
import "./nav-bar.css";
import Image from "./img/cat.png";

const Navbar = () => {
  return (
    <div className="grandWrapper">
      <img src={Image} alt="cat" />
      <nav className="navbar">
        <h1>Cats for Life</h1>
        <div className="links">
          <Link className="soloLink" to="/">
            Home
          </Link>
          <Link className="soloLink" to="/contact">
            Contact
          </Link>
          <Link className="soloLink" to="/about">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
