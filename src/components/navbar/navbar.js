import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
const Navbar=({name,room})=>{
    console.log(name,room);
    
    return (
        <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <span className="tlines">|||</span>
        </label>
        
        
        <label className="logo">Chat App</label>
        
        <ul>
        {/* <Link onClick={event=>(!name|| !room)? event.preventDefault() :null} to={`/chat?name=${name}&room=${room}`}> <li className="active">HOME</li></Link>
       */}
        
        {/* <Link onClick={event=>(!name|| !room)? event.preventDefault() :null} to={`/tictac?name=${name}&room=${room}`}>  <li>TicTac</li></Link> */}
        <Link onClick={event=>(!name|| !room)? event.preventDefault() :null} to={`/`}> <li   className="active">LOGOUT</li></Link>
            
            {/*<li><a href="#">Feedback</a></li> */}
        </ul>
    </nav>
    )
       
} 
export default Navbar; 