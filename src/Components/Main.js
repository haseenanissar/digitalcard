import React from "react"
import img from "../images/profile.jpg"
 export default function Main()
 {
     return(
        <header>
          <img className ="profile" src={img} alt="profile_pic"/>
          <h1>Haseena Nissar</h1>
          <h4>Frontend Developer</h4>
          <p>hasy.rah@gmail.com</p>
          <div className="btn">
            <button className="one" type="button">Email</button>
            <button className="two" type="button">LinkedIn</button>
         </div>
        </header>
     )
 }