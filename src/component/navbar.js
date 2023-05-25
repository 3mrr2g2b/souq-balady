import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../component/login";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const clicker = () => {
    
     }

  const hiddenDot = () => {
    document.querySelector(".dot").classList.add("active");
  };

  return (
    <>
      <div className="navbar">
        <div className="brand">
          <Link className="link" to="/pluginDocs">
            <i className="fas fa-shopping-cart change-color"></i> SOUQ Balady
          </Link>
        </div>
        <ul className="menu">
         
          <li>
            <Link className="link" to="/plugins" onClick={hiddenDot}>
              <i className="fas fa-store"></i>
              <span className="dot"></span>
            </Link>
          </li>
          <li>
            <Link className="link" to="/store">
              <i className="far fa-list-alt"></i>
            </Link>
          </li>
           <li>
            <Link className="link" to="/pluginDocs">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <Link className="link" to="/policy">
              <i className="fas fa-newspaper"></i>
            </Link>
          </li>
          <li>
            <Link to='/aboutme' className='link'>
              <i className="far fa-question-circle"></i>
            </Link>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default Navbar;
