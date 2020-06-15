import React,{useState} from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import av from "./avatar.png"

const Join=()=>{
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");
    return (
        <header>
        <div className="main-header">
            <img src={av} alt="jay"/>
        <h1>JOIN</h1>
        <p><input type="text" placeholder="Username" onChange={(event)=>setName(event.target.value)}/></p>
        <p><input type="text" placeholder="Room" onChange={(event)=>setRoom(event.target.value)}/></p>
        <Link onClick={event=>(!name|| !room)? event.preventDefault() :null} to={`/chat?name=${name}&room=${room}`}>
        <button type="submit">Sign In</button>
        </Link>
    </div>
    </header>
    ) 
       
}
export default Join;