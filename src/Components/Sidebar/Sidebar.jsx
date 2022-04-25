import React, { Profiler } from "react";
import { Link, } from "react-router-dom"
import { Chat, Settings, Map, Message, ChatRounded, Person, Dashboard, School, CalendarMonth, Mail, Info } from "@mui/icons-material"
import "./sidebar.scss"
var image = require("../../image/image.jpg")

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="detail">
                    <p>Admin</p>
                    <div className="icons">
                        <Chat className="icons" />
                        <Map className="icons" />
                        <Settings className="icons" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="items">
                    <ul>
                        <li><Link to={"/"} className = "link"> <Person className="icon" /> User</Link> </li>
                        <li><Link to={"/"} className = "link"> <Mail  className="icon"/> Mail</Link> </li>
                        <li><Link to={"/"} className = "link"> <Message  className="icon"/> Message</Link> </li>
                        <li><Link to={"/"} className = "link"> <Settings  className="icon"/> Setting</Link> </li>
                        <li><Link to={"/"} className = "link"> <School  className="icon"/> Learning</Link> </li>
                        <li><Link to={"/"} className = "link"> <ChatRounded  className="icon"/> Chart</Link> </li>
                        <li><Link to={"/"} className = "link"> <Dashboard  className="icon"/> Dashboard</Link> </li>
                        <li><Link to={"/"} className = "link"> <CalendarMonth  className="icon"/> Calander</Link> </li>
                        <li><Link to={"/about"} className = "link"> <Info  className="icon"/> About</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar