import React from 'react'
import burger from '../assets/Images/burger.png'
import { IoSearchSharp } from "react-icons/io5";
import "./navbar.css"

import { useEffect, useState } from 'react'



function Navbar() {


    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <div className="navbar-container">


            <div className="logo-container">
                <img src={burger} alt="myburger" className='burger' />
                <p className='slogan'>Cooks <br></br>Delight</p>
            </div>

            <nav className="navbar">
                <ul className="unordered-list">
                    <li className={`list-item ${scrolled ? "scrolled" : ""}`}>HOME</li>
                    <li className={`list-item ${scrolled ? "scrolled" : ""}`}>RECIPES</li>
                    <li className={`list-item ${scrolled ? "scrolled" : ""}`}>COOKING TIPS</li>
                    <li className={`list-item ${scrolled ? "scrolled" : ""}`}>ABOUT</li>
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