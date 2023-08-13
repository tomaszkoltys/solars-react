import React from "react";
import data from "../../constants/data";
import "./Numbers.css";
import { motion } from "framer-motion";
import { horizontalIndexAnimation } from "../../animations/horizontalIndexAnimation";

const Numbers = () => {
    return (
        <div className="numbers section__padding">
            <div className="container">
            <h1>
      </h1>
            <h2 className="section__title text__center"><span className="text__yellow">Solars</span> - liczby</h2>
                <div className="numbers__content grid">
                    {
                        data.numbers.map((number, index) => {
                            return (
                                <motion.div className="numbers__content--item flex" key={index} variants={horizontalIndexAnimation} initial="initial" whileInView="animate" viewport={{ once: true}} custom={index}>
                                    <div className="numbers__content--quantity">
                                        <h2 className="quantity fw__6 flex">+{number.quantity}</h2>
                                    </div>
                                    <div className="numbers__content--text">
                                        <p className="text fw__4">{number.text}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Numbers;