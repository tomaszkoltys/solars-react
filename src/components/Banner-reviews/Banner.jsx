import React from "react";
import "./Banner.css";
import images from "../../constants/images";
import { motion } from 'framer-motion';
import { horizontalAnimation } from "../../animations/horizontalAnimation";

const Banner = () => {

    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${images.header_review}) center/cover no-repeat`
        }}>

        <div className="container">
            <motion.div className="banner__content text__light flex" variants={horizontalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                <h1 className="banner__title fw__6">Opinie</h1>
                <p className="text fw__4">Nasi klienci są zachwyceni jakością naszych usług i profesjonalnym podejściem do każdego projektu. 
                Wybierając nasze gotowe zestawy solarnego, mieli pewność, że dostają rozwiązanie dopasowane do ich indywidualnych potrzeb. 
                Nasze zespoły ekspertów dbają o najmniejszy detal, co przekłada się na wyjątkową wydajność i oszczędności energii w ich domach. </p>
            </motion.div>
        </div>
        </div>

    )
}

export default Banner;