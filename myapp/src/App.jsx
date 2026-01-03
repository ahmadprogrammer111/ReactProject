import "./App.css"
import "./media_Query.css"
import burger from "./assets/Images/burger.png"
import menu_Link from "./assets/Images/menu_Link.svg"
import Tag from "./assets/Images/Tag.png"
import Recipe_img from "./assets/Images/Recipe_img.png"
import { LiaUtensilsSolid } from "react-icons/lia";
import { LiaHamburgerSolid } from "react-icons/lia";
import { MdOutlineFastfood } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { GiTacos } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";



function App() {


    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return (
        <div className="main_div">
            {/* Navbar  */}
            < div className="navbar-container">
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
                <div className="menu_link">
                    <img src={menu_Link} />
                </div>
            </div >

            {/*Body*/}

            <div className="bgimage-container">

                <div className="hero-text">
                    <p className="UNLEASH">UNLEASH CULINARY EXCELLENCE</p>
                    <p className="aroma">Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
                </div>

                <button className="explore-recipes">EXPLORE RECIPES</button>
            </div>

            {/*Card Section */}

            <div className="card-sec">
                <div className="left-sec">
                    <div className="EXPLORE-button-div">EXPLORE</div>
                    <p className="our-pallete">OUR DIVERSE <br></br>PALLETE</p>
                    <p className="our-pallete-para">If you are a breakfast enthusiast, a connoisseur of savory delights, or
                        on the lookout for irresistible desserts, our curated selection has
                        something to satisfy every palate.</p>
                    <button className="see-more">SEE MORE</button>
                </div>

                <div className="right-sec">

                    <div className="menu-li">
                        <LiaUtensilsSolid color="black" size={40} />
                        <p>BREAKFAST</p>
                    </div>
                    <div className="menu-li">
                        <LiaHamburgerSolid color="black" size={40} />
                        <p>LUNCH</p>
                    </div>
                    <div className="menu-li">
                        < MdOutlineFastfood color="black" size={40} />
                        <p>DINNER</p>
                    </div>
                    <div className="menu-li">
                        <LuDessert color="black" size={40} />
                        <p>DESERT</p>
                    </div>
                    <div className="menu-li">
                        <GiTacos color="black" size={40} />
                        <p>QUICK BITE</p>
                    </div>
                </div>
            </div>

            {/*Our Featured */}

            <div className="our-featured">
                <h2>Featured Recipe</h2>
                <div className="featured-grid">
                    <div className="respi-card">
                        <img src={Tag} className="Tag" />
                        <img src={Recipe_img} className="veg-respi" />
                        <div className="content-sec">
                            <p className="card-title">Savory Herb-Infused Chicken</p>
                            <p className="card-para">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                            <div className="footer-sec">
                                <p className="time">40 Min - easy prep - 3 serves</p>
                                <button className="button">View Recipe</button>
                            </div>
                        </div>
                    </div>

                    <div className="respi-card">
                        <img src={Tag} className="Tag" />
                        <img src={Recipe_img} className="veg-respi" />
                        <div className="content-sec">
                            <p className="card-title">Savory Herb-Infused Chicken</p>
                            <p className="card-para">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                            <div className="footer-sec">
                                <p className="time">40 Min - easy prep - 3 serves</p>
                                <button className="button">View Recipe</button>
                            </div>
                        </div>
                    </div>

                    <div className="respi-card">
                        <img src={Tag} className="Tag" />
                        <img src={Recipe_img} className="veg-respi" />
                        <div className="content-sec">
                            <p className="card-title">Savory Herb-Infused Chicken</p>
                            <p className="card-para">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                            <div className="footer-sec">
                                <p className="time">40 Min - easy prep - 3 serves</p>
                                <button className="button">View Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*CTA Section */}

            <div className="cta-section">
                <div className="cta-inner">
                    <p className="EXPLORE">EXPLORE</p>
                    <h2 className="jointhefun">JOIN THE FUN<br></br>SUBSCRIBE NOW!</h2>
                    <p className="jointhefunpara">Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
                    <div className="input_button">
                        <input type="text" className="emailaddress" placeholder="Email Address" pl />
                        <button className="SUBSCRIBE">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}

            < div className={"footer-container"}>


                <div className="extra-div">
                    <div className="logo-container">
                        <img src={burger} alt="myburger" className='burger' />
                        <p className='slogan-footer'>Cooks <br></br>Delight</p>
                    </div>

                    <nav className="footer-bar">
                        <ul className="unordered-list-footer">
                            <li className="list-item-footer">HOME</li>
                            <li className="list-item-footer">RECIPES</li>
                            <li className="list-item-footer">COOKING TIPS</li>
                            <li className="list-item-footer">ABOUT</li>
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
            </div>




        </div>
    )
}

export default App
