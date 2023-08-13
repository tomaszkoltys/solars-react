import React from "react";
import "./Header.css";
import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { opacityAnimation } from "../../animations/opacityAnimation";

const Header = () => {
    return (
        <div className="header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
        }}>
        <Navbar/>

        <div className="container">
            <div className="header__content text__center text__light flex__center">
                <div className="header__content--left">
                    <h1 className="header__title fw__6"><span className="text__yellow">Solars</span> - twoje panele fotowoltaiczne</h1>
                    <p className="description__text">Chcesz produkować własną energię elektryczną lub płacić mniej za prąd? Wybierz naszą instalację fotowoltaiczną!</p>
                    <Link to="/oferta" className="btn btn__yellow fw__6">Sprawdź ofertę</Link>
                </div>
                <motion.div className="header__content--right flex__center" variants={opacityAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                    <img src={images.icon__sun} alt="sun" className="sun__image"/>    
                </motion.div>
            </div>
        </div>
        </div>

    )
}

export default Header;