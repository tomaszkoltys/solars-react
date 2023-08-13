import React from "react";
import "./Banner.css";
import images from "../../constants/images";
import { motion } from 'framer-motion';
import { horizontalAnimation } from "../../animations/horizontalAnimation";


const Banner = () => {

    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${images.header_main}) center/cover no-repeat`
        }}>

        <div className="container">
            <motion.div className="banner__content text__light flex" variants={horizontalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                <h1 className="banner__title fw__6">Zestawy solarne</h1>
                <p className="text fw__4">Zakup gotowego zestawu solarnego pozwala uniknąć problemów związanych z niewłaściwym dopasowaniem elementów, 
                co mogłoby prowadzić do mniejszej wydajności całego systemu. Wybór takiego zestawu jest zazwyczaj oparty na standardowych rozwiązaniach, 
                które zostały już wypróbowane i dostosowane do typowych potrzeb domowych.</p>
            </motion.div>
        </div>
        </div>

    )
}

export default Banner;