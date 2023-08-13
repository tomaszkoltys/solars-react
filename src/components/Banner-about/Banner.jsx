import React from "react";
import "./Banner.css";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { horizontalAnimation } from "../../animations/horizontalAnimation";


const Banner = () => {

    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images.header_about}) center/cover no-repeat`
        }}>

        <div className="container">
            <motion.div className="banner__content text__light flex" variants={horizontalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                <h1 className="banner__title fw__6">O firmie</h1>
                <p className="text fw__4">Od ponad dwóch dekady korzystamy z energii słonecznej jako fundamentu działania naszych urządzeń i źródła rozwoju naszej firmy. 
                Nasze produkty opierają się na zaawansowanych technologiach i innowacyjnych rozwiązaniach, które umożliwiają nam dostarczanie klientom energooszczędnych, ekologicznych i 
                wydajnych rozwiązań energetycznych.</p>
            </motion.div>
        </div>
        </div>

    )
}

export default Banner;