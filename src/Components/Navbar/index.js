import React from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
      <div className="navbar sticky">
      <div className="Header"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png" style={{height:'30px'}} /> Medium</div>
    <div className="link">
        <a href="#">OurStory</a>
        <a href="#">Membership</a>
        <a href="#">Write</a>
        <a href="#">Sign In</a>
        <button id="new3">Get Started</button>
    </div></div>
   )

 }

export default Navbar