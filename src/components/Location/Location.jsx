import React from "react";
import "./Location.css";
import {FaPhoneAlt} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {MdLocationOn} from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Location = () => {
    const navigate = useNavigate();

    const moveToForm = () => {
        navigate("/");
        setTimeout(() => {
            const formSection = document.getElementById("form__move");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 1000); 
      };
      
    return(
        <div className="location section__padding">
            <div className="container">
            <h2 className="section__title text__center">Gdzie jesteśmy?</h2>
                    <div className="location__content flex">
                        <div className="location__content--left">
                            <h3 className="location__title fw__5">Solars</h3>
                            <ul className="location__links">
                                <li><a className="text__dark" href="tel:48986689009"><span className="text__yellow"><FaPhoneAlt /></span>&nbsp;(+48) 986 689 009</a></li>
                                <li><a className="text__dark"href="mailto:biuro@solars.pl"><span className="text__yellow"><GrMail /></span>&nbsp;biuro@solars.pl</a></li>
                                <li className="text__dark"><span className="text__yellow"><MdLocationOn /></span>&nbsp;ul. Tarasowa 12 20-819 Lublin</li>
                            </ul>
                            <Link to="/" className="btn btn__yellow fw__6" onClick={moveToForm}>Formularz</Link>
                        </div>
                        <div className="location__content--right">
                            <div className="location__map">
                                <iframe width="100%" height="500" title="Solars" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Tarasowa%2012%2020-819%20Lublin+(Solars)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Solars</a></iframe>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Location;