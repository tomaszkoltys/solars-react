import React from "react";
import data from "../../constants/data";
import "./News.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowRight} from "react-icons/fa";


const News = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScrool: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="news section__padding bg__whitesmokelight">
            <div className="container">
            <h2 className="section__title text__center">Aktualności</h2>
                <div className="news__content">
                    <Slider {...settings}>
                        {
                            data.news.map((news, index) => {
                                return(
                                    <div className="news__item" key={index}>
                                        <img src={news.img} alt="" className="image" />
                                        <h4 className="text text__grey fw__5">{news.title}</h4>
                                        <a href="#" className="news__link fw__4 text__yellow">Czytaj więcej <span><FaArrowRight size={15} /></span></a>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default News;