import React from "react";
import real from "../src/image/real-estate-house.png";
function Navbar(){
    return(
        <div className="nav">
            <img src={real}  className="logo" alt=""/>
            <h4 className="txt">XYZ SYSTEMS LLP.</h4>
        </div>
    )
}
export default Navbar;