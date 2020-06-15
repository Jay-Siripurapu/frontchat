import React, { useEffect,useState } from 'react';
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";
import Infobar from '../infobar/infobar';
import Input from '../input/input';
import Messages from '../messages/messages';
import Game from "../games/tictac/game/index";

import Navbar from "../navbar/navbar";
let socket;
const Chat=({location})=>{ 
    var [name,setName]=useState("");
    var [room,setRoom]=useState("");
    const [users, setUsers] = useState('');
    const [message,setMessage]=useState("");
    const [messages,setMessages]=useState([]);
    const endpoint="https://server-of-chatbot.herokuapp.com/";
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        socket=io(endpoint);
        setName(name); 
        setRoom(room);
      
        socket.emit("join",{name,room},()=>{
        
        });
        return ()=>{
            socket.emit("disconnect");
            socket.off();
        }
    },[endpoint,location.search]);
    // but this use effct is excecuted many times we should restrict it by blockage[]this shows to change when thesese valuse changed
    useEffect(()=>{
        socket.on("message",(message)=>{
            setMessages([...messages,message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    },[messages]);
    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit("sendMessage",message,()=>setMessage(""));
        }
    }
    //dum code
    var name1=name;
    name=name1;
    
    return (
        <div>
            <Navbar name={name} room={room}/>
        <div className="outercont">
           
            <div className="cont1 ">
            {/* <TextContainer users={users}/> */}
            <Game/>
            </div>
            <div className="container">
                <Infobar room={room}/>
                <Messages messages={messages} name={name}/>
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
          
        </div>
        </div>
    )
       
}
export default Chat;