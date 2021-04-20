import { Component } from "react";
import {NavLink} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
            <h1>Books By The Ton</h1> 
            <NavLink to = "/">Home</NavLink> 
            <NavLink to = "/Add-Book">Add-a-Book</NavLink> 
            <NavLink to = "/login">Login</NavLink>
            <NavLink to = "/register">Register</NavLink>
            
            </div>
        )
    }
}
export default Header