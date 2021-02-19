import React from 'react';
import './style.css';
import logo from '../../Assets/images.png'; 

/**
* @author
* @function Body
**/

const Body = (props) => {
  return(
    <div id="main">
    <div className="content">
      <h1 style={{fontSize:'70px',fontWeight:'normal'}}>
      Explore new
      Perspectives</h1>
      Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone's welcome.
      <a href="#"> Learn more.</a><br />
      <button id="btn">Get Started</button>
    </div>
    <div className="logo"><img src= {logo} /></div>
    </div>
   )

 }

export default Body