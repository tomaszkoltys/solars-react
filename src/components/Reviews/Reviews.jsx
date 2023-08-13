import React from "react";
import "./Reviews.css";
import images from "../../constants/images";
import data from "../../constants/data";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Reviews = () => {
    let settings__reviews = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScrool: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };


    return (
        <div className="reviews section__padding">
            <div className="reviews__content flex bg__whitesmokelight">
                <div className="reviews__content--item flex">          
                    <div className="reviews__content--left grid">
                        <img src={images.review_1} alt="" className="image" />
                        <img src={images.review_2} alt="" className="image image__responsive" />
                        <img src={images.review_3} alt="" className="image" />
                        <img src={images.review_4} alt="" className="image" />
                    </div>
                    <div className="reviews__content--right">
                        <h4 className="text title fw__7">Co mówią o nas</h4>
                        <div className="reviews__content--right__reviews">
                            <Slider {...settings__reviews}>
                            {
                                data.reviews.map((review, index) => {
                                    return(
                                        <div className="reviews__item" key={index}>
                                            <p className="text__description text__grey"><span><FaQuoteLeft/>&nbsp;</span>{review.text}&nbsp;<span><FaQuoteRight/></span></p>
                                            <h4 className="text text__grey fw__8 reviews__name">{review.name}</h4>
                                            <h4 className="text text__grey fw__6 reviews__benefits">{review.benefits}</h4>
                                        </div>
                                    )
                                })
                            }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    )
}

export default Reviews;