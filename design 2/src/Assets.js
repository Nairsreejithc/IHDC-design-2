import React from "react";
import celeb from '../src/image/celeb.png'
function Assets(){
    return(  
       <div className=" container">
        <div className="row">
        <div className=" col m-5">
                <h1 className="text-primary">Unlock Exclusive Benefits</h1>
                <label><b>PHONE NUMBER</b></label>
                <div>
                <select className="rounded-5 px-5">
                    <option value="India">+91 India</option>
                    <option value="USA">+1 USA</option>
                    <option value="UK">+44 UK</option>
                    <option value="China">+86 China</option>
                    <option value="Japan">+81 Japan</option>
                </select>
                <input type="tel" className="rounded-5 ms-2 px-2"></input>
                </div><br/>
                <label><b>NAME</b></label><br/>
                <input type="text" placeholder="" className="rounded-5 bx" ></input><br/><br/>
                <label><b>EMAIL [OPTIONAL]</b></label><br/>
                <input type="email" placeholder="" className="rounded-5 bx"></input><br/><br/>
                <button className="btn btn-primary rounded-5">CONTINUE</button>
                <p className=" mt-3 mx-auto">Get ready to receive a secret code OTP on your phone</p>
        </div>
        <div className="col"> 
            <img src={celeb} className="cel" alt="" />
        </div>
            
        </div>
       </div>
    )
}
export default Assets