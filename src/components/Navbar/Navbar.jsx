import { useState } from "react";
import { Link as NavLinks } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/beatify-logo.png";

function Navbar() {
  const [showExtension, setShowExtension] = useState(false);

  const showNavHandler = () => {
    setShowExtension(true);
  };

  const closeNavHandler = () => {
    setShowExtension(false);
  };

  return (
    <nav>
      <figure>
        <img src={logo} alt="Beatify Logo" className="w-16 cursor-pointer" />
      </figure>
      {!showExtension && (
        <BiMenuAltRight className="nav-icons" onClick={showNavHandler} />
      )}
      {showExtension && (
        <AiOutlineClose
          className="  text-4xl text-black lg:hidden cursor-pointer"
          onClick={closeNavHandler}
        />
      )}
      <ul
        className={`${
          showExtension === true
            ? "mobile-nav nav-link-container"
            : "nav-link-container hidden-class"
        }`}
      >
        <li className="nav-links" onClick={closeNavHandler}>
          <NavLinks to="/">Home</NavLinks>
        </li>
        <li className="nav-links" onClick={closeNavHandler}>
          <NavLinks to="/services">Services</NavLinks>
        </li>
        <li className="nav-links" onClick={closeNavHandler}>
          <NavLinks to="/events">Events</NavLinks>
        </li>
        <li className="nav-links" onClick={closeNavHandler}>
          <NavLinks to="/careers">Careers</NavLinks>
        </li>
        <li className="nav-links" onClick={closeNavHandler}>
          <NavLinks to="/about">About Us</NavLinks>
        </li>
        <li className="nav-links mb-3 lg:mb-0" onClick={closeNavHandler}>
          <NavLinks to="/faq">FAQ</NavLinks>
        </li>
        <li
          className="text-white bg-navBtn px-5 py-3 rounded-lg"
          onClick={closeNavHandler}
        >
          <NavLinks to="/contactus">Contact Us</NavLinks>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
