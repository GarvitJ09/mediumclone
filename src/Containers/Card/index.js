import React from 'react'
import './style.css';

/**
* @author
* @function Card
**/

const Card = (props) => {
    return(
        <div className="Card">
            <div>
                <img  id="img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <span>{props.name} from {props.place}</span>
                <h3>{props.heading}</h3>
                <p>{props.content}</p>
                <span>{props.date}&nbsp;.&nbsp;&nbsp;{props.time}min read</span>
            </div>
            <div><img style={{width:'140px'}} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" /> </div>
        </div>
    )

 }

export default Card