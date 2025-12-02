import React from 'react'
import burger from '../assets/Images/burger.png'
import "./Footer1.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        < div className={"footer-container"}>


            <div className="extra-div">
                <div className="logo-container">
                    <img src={burger} alt="myburger" className='burger' />
                    <p className='slogan'>Cooks <br></br>Delight</p>
                </div>

                <nav className="navbar">
                    <ul className="unordered-list">
                        <li className="list-item">HOME</li>
                        <li className="list-item">RECIPES</li>
                        <li className="list-item">COOKING TIPS</li>
                        <li className="list-item">ABOUT</li>
                    </ul>
                </nav>

                <div className="social_media_icons">
                    < FaTiktok size={20} color='light-grey' />
                    <FaFacebookF size={20} color='light-grey' />
                    <RiInstagramFill size={25} color='light-grey' />
                    <FaYoutube size={25} color='light-grey' />
                </div>
            </div>
            <div className="footer_line_copyright">
                <p className="footerline">Copyright: © 2024 Cooks Delight.</p>
            </div>


        </div >)
}

export default Footer