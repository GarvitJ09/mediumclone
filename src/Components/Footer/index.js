import React from 'react'
import './style.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="Footer">
            <span >
                Medium<br />
                <br /><a href="#"><img style={{width:'180px'}} src="https://colorlib.com/wp/wp-content/uploads/sites/2/minimal-social-media-icons.jpg" /></a>
            </span>
            <span>
                Support<br />
                ContactUs<br />
                FAQ<br />
                Downloads<br />
                Locate A Dealer<br />
                Product Reisspanation<br />
                Spare Parts<br />
            </span>
            <span>
                Medium<br />
                About Medium<br />
                Design<br />
                Careers<br />
                Newsroom<br />
                Access<br />
            </span>
            <span>
                <img src=""/>Stay Updated<br />
                <input type="email" placeholder="Enter your e-mail address" /><br />
                <button>Subscribe</button> <br />
            </span>
    </div>
   )

 }

export default Footer