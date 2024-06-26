
// import React from "react";
import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar(){

    return (
        <div className="Navbar">
            <div className="navleft">
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            </div>
            <div className="navcenter">
                <ul className="topList">
                    <li className="topListItem" >
                    <Link to="/" className="topLink">HOME</Link>
                    </li>
                    <li className="topListItem" >
                       {/* <Link to="/about"  className="topLink">ABOUT</Link> */}
                       <a href="/testi" className="topLink">TESTIMONIALS</a>
                    </li>
                    <li className="topListItem">
                    <Link to="/blog" className="topLink">BLOG</Link>
                    </li>
            
                    
                    <li className="topListItem">
                    <Link to="/register" className="topLink">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/login" className="topLink">LOGout</Link>
                    </li>

                </ul>
            </div>
            <div className="navright">
                <img  className= "topImage" src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" height={"40px"} width={"40px"}/>
                <i  className=" searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}