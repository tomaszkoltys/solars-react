import React from "react";
import "./Benefits.css";
import data from "../../constants/data";
import { motion } from "framer-motion";
import { verticalAnimation } from "../../animations/verticalAnimation";

const Benefits = () => {
    return (
        <div className="benefits bg__white section__padding">
            <div className="container">
                <h2 className="section__title fw__6 text__center">
                Dlaczego inwestycja w fotowoltaikę jest <span className="text__yellow">opłacalna?</span>
                </h2>
                <div className="benefits__content grid">
                    {
                        data.benefits.map((benefit, index) => {
                            return (
                                <motion.div 
                                    className="benefits__content--item text__center" 
                                    key={index}
                                    variants={verticalAnimation}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true}}
                                >
                                    <img src={benefit.img} alt="" className="icon" />
                                    <h4 className="text fw__8">{benefit.title}</h4>
                                    <p className="text__description text__grey">{benefit.text}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Benefits;