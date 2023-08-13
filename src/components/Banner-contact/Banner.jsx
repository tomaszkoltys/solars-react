import React from "react";
import "./Banner.css";
import images from "../../constants/images";
import { motion } from 'framer-motion';
import { horizontalAnimation } from "../../animations/horizontalAnimation";


const Banner = () => {

    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images.header__contact}) center/cover no-repeat`
        }}>

        <div className="container">
            <motion.div className="banner__content text__light flex" variants={horizontalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                <h1 className="banner__title fw__6">Kontakt</h1>
                <p className="text fw__4">Jeśli masz pytania dotyczące instalacji paneli słonecznych, chciałbyś poznać korzyści związane z 
                energią odnawialną lub potrzebujesz porady w doborze rozwiązania dostosowanego do Twoich potrzeb, skontaktuj się z nami. 
                Jesteśmy gotowi pomóc i dzielić się naszą wiedzą.</p>
            </motion.div>
        </div>
        </div>

    )
}

export default Banner;