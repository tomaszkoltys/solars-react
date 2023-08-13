import React, {useState, useEffect} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaInstagram, FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = ({style}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const isActiveLink = () => {
        var path = location.pathname;
        const navbarPaths = ["/oferta", "/onas", "/kontakt", "/opinie"];
      return navbarPaths.includes(path) ? "nav__active" : "";
    };


    const handleScroll = () => {
        if (window.scrollY > 0) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }
    };

      
    const navigate = useNavigate();
  
    const moveToForm = () => {
        navigate("/");
        setTimeout(() => {
            const formSection = document.getElementById("form__move");
            if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 1000); 
  };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <nav className={`navbar ${(isScrolled || toggleMenu === true) ? "navbar__fixed" : ""}`} style={style}>
            <div className="container flex">
                <div className="brand flex">
                    <Link to="/" className="navbar__brand">
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar__nav flex__center">
                    <ul className={`navbar__links flex ${toggleMenu && "switch"}`}>
                        <li className="nav__item">
                            <Link to="/" onClick={() => setToggleMenu(false)} className={`nav__link fw__5 text__light" ${isActiveLink()} ${isScrolled ? "navlink__fixed" : ""} ${toggleMenu && "switch"}`}>Strona główna</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/oferta" onClick={() => setToggleMenu(false)} className={`nav__link text__cap fw__5 text__light" ${isActiveLink()} ${isScrolled ? "navlink__fixed" : ""} ${toggleMenu && "switch"}`}>oferta</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/onas" onClick={() => setToggleMenu(false)} className={`nav__link text__cap fw__5 text__light" ${isActiveLink()} ${isScrolled ? "navlink__fixed" : ""} ${toggleMenu && "switch"}`} >o nas</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/kontakt" onClick={() => setToggleMenu(false)} className={`nav__link text__cap fw__5 text__light" ${isActiveLink()} ${isScrolled ? "navlink__fixed" : ""} ${toggleMenu && "switch"}`}>kontakt</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/opinie" onClick={() => setToggleMenu(false)} className={`nav__link text__cap fw__5 text__light" ${isActiveLink()} ${isScrolled ? "navlink__fixed" : ""} ${toggleMenu && "switch"}`} >opinie</Link>
                        </li>
                        {toggleMenu && (
                        <div className="navbar__social flex">
                            <a href="#" className="social__link">
                                <FaFacebookSquare className="social__icon" />
                            </a>
                            <a href="#" className="social__link">
                                <FaInstagram className="social__icon" />
                            </a>
                            <a href="#" className="social__link">
                                <FaLinkedin className="social__icon" />
                            </a>
                        </div>
                        )}
                    </ul>
                </div>
                <div className="navbar--btn">
                    <Link to="/" onClick={moveToForm} className="btn btn__yellow text__cap fw__6">formularz</Link>
                </div>
                <div className={`navbar__toggle--btn flex__center ${toggleMenu && "switch"}`} onClick={() => setToggleMenu(!toggleMenu)}>
                    <div className="hamburger"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

