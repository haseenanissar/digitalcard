import React from "react"
import Facebook from "../images/Facebook Icon.png"
import GitHub from "../images/GitHub Icon.png"
import Instagram from "../images/Instagram Icon.png"
import Linkedin from "../images/Linkedin Icon.png"

 export default function Footer()
 {
    return(
        <footer className="footer">
          <img src={Facebook} alt="fb"/>
          <img src={GitHub} alt="github"/>
          <img src={Instagram} alt="insta"/>
          <img src={Linkedin} alt="linkedin"/>
        </footer>
     )
 }