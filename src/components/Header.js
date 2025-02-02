import { LOGO_URL } from "../utils/constants";
import AboutUs from "./AboutUs";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li onClick={() => {
                        {
                            console.log("clicked");
                        }
                    }} >Home</li>
                    <li onClick={() => {
                        { <AboutUs /> }
                    }}>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;