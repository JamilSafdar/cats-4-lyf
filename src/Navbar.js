import { Link } from "react-router-dom";
import "./nav-bar.css";
import Image from "./img/cat.png";

const Navbar = () => {
<<<<<<< HEAD
    return(
        <div className = "grandWrapper">
        <nav className="navbar">
            <h1>Cats for Life</h1>
            <div className="links">
                <div className = "soloLink">
                    <Link to="/">Home</Link>   
                </div>
                <div className = "soloLink">
                <Link to="/basketList">Basket</Link>
                </div>
                <div className = "soloLink">
                <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
=======
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
>>>>>>> 59ff3b037f239801063023901d78f8676a9bb24c
    </div>
  );
};

export default Navbar;
