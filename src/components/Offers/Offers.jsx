import React from "react";
import "./Offers.css";
import data from "../../constants/data";

const Offers = () => {
    return(
        <div className="offers section__padding">
            <div className="container">
            <h2 className="section__title text__center">Nasza oferta</h2>
                <div className="offers__content flex">
                {
                    data.offers.map((offer, index) => {
                    return (
                        <div className="offers__content--item flex" key={index}>
                            <div className="offers__content--left">
                                <img src={offer.img} alt="" className="image" />
                            </div>
                            <div className="offers__content--right">
                                <h4 className="text fw__8">{offer.title}</h4>
                                <p className="text__description text__grey">{offer.text}</p>
                                <a href="#" className="btn btn__yellow fw__6">Poznaj produkt</a>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Offers;