import React from "react"
import Details from "./Components/Details"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

 export default function App()
 {
     return(
        <div className="maincontainer">
            <div className="subcontainer">
                <Main />
                <Details />
                <Footer />
            </div>
        </div>
     )
 }