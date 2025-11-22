import React from 'react'
import burger from '../assets/Images/burger.png'
import { IoSearchSharp } from "react-icons/io5";
import "./navbar.css"

import { useEffect, useState } from 'react'



function Navbar({ varient = "header" }) {

    const isFooter = varient === 'Footer'

    console.log("isFooter:", isFooter)


    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <div className="navbar-container" style={{ "--nav-bg": isFooter ? "#262522" : "transparent" }}>


            <div className="logo-container">
                <img src={burger} alt="myburger" className='burger' />
                <p className='slogan' style={{ "--slogan-color": isFooter ? "white" : "black" }}>Cooks <br></br>Delight</p>
            </div>

            <nav className="navbar">
                <ul className="unordered-list">
                    <li className={`list-item ${!isFooter && scrolled ? "scrolled" : ""}`}>HOME</li>
                    <li className={`list-item ${!isFooter && scrolled ? "scrolled" : ""}`}>RECIPES</li>
                    <li className={`list-item ${!isFooter && scrolled ? "scrolled" : ""}`}>COOKING TIPS</li>
                    <li className={`list-item ${!isFooter && scrolled ? "scrolled" : ""}`}>ABOUT</li>
                </ul>
            </nav>


            <div className="search-container">
                <div className='search-bg'>
                    <IoSearchSharp className='search' />
                </div>
                <button className="subscribe">SUBSCRIBE</button>
            </div>


        </div>
    )
}

export default Navbar