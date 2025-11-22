import "./App.css"
import Navbar from './components/navbar'
import { LiaUtensilsSolid } from "react-icons/lia";
import { LiaHamburgerSolid } from "react-icons/lia";
import { MdOutlineFastfood } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { GiTacos } from "react-icons/gi";


export default function App() {
    return (
        <div className="main-container">

            <Navbar />

            <div className="bgimage-container">
                <p className="UNLEASH">UNLEASH CULINARY EXCELLENCE</p>
                <p className="aroma">Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
                <button className="explore-recipes">EXPLORE RECIPES</button>
            </div>


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

            <div className="heading-container">
                <p className='RECIPE'>RECIPES</p>
            </div>

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


            <Navbar varient="Footer" />

        </div>
    )
}
