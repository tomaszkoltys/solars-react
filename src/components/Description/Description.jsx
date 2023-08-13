import React,{ useState, useEffect } from "react";
import data from "../../constants/data";
import "./Description.css";
import { motion } from "framer-motion";
import { verticalAnimation } from "../../animations/verticalAnimation";

const Description = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return(
        <div className="description bg__whitesmokelight">
                <div className="description__content">
                    {
                        data.descriptions.map((description, index) => {
                            const isOddIndex = index % 2 !== 0;
                            
                            return (
                                <div className="description__content--item flex flex__center" key={index}>
                                    {isLargeScreen ? (
                                        isOddIndex ? (
                                        <>
                                            <motion.div className="description__content--right" variants={verticalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                                                <h4 className="text">{description.title}</h4>
                                                <p className="description__text text__grey">{description.text}</p>
                                            </motion.div>
                                            <div className="description__content--left">
                                                <img src={description.img} alt="" className="image" />
                                            </div>
                                        </>
                                        
                                    ): (
                                        <>
                                            <div className="description__content--left">
                                                <img src={description.img} alt="" className="image" />
                                            </div>
                                            <motion.div className="description__content--right" variants={verticalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                                                <h4 className="text">{description.title}</h4>
                                                <p className="description__text text__grey">{description.text}</p>
                                            </motion.div>
                                        </>
                                        
                                    )

                                    ):(
                                        <>
                                            <div className="description__content--left">
                                                <img src={description.img} alt="" className="image" />
                                            </div>
                                            <motion.div className="description__content--right" variants={verticalAnimation} initial="initial" whileInView="animate" viewport={{ once: true}}>
                                                <h4 className="text">{description.title}</h4>
                                                <p className="description__text text__grey">{description.text}</p>
                                            </motion.div>
                                        </>
                                    )}
                                    
                                    
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Description;
