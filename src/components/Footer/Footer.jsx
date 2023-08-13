import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer section__padding">
            <div className="container">
                <div className="footer__content grid text__light text__center">

                <div className="footer__content--item">
                    <h3 className="footer__title">Kontakt</h3>
                    <ul className="footer__links">
                        <li><a href="tel:48986689009">(+48) 986 689 009</a></li>
                        <li><a href="mailto:biuro@solars.pl">biuro@solars.pl</a></li>
                        <li>ul. Tarasowa 12 20-819 Lublin</li>
                    </ul>
                </div>

                <div className="footer__content--item">
                    <h3 className="footer__title">Oferta</h3>
                    <ul className="footer__links">
                        <li><a href="#">Dla domu</a></li>
                        <li><a href="#">Dla firmy</a></li>
                        <li><a href="#">Dla rolnika</a></li>
                    </ul>
                </div>

                <div className="footer__content--item">
                    <h3 className="footer__title">Produkty</h3>
                    <ul className="footer__links">
                        <li><a href="#">Instalacje fotowoltaiczne</a></li>
                        <li><a href="#">Ładowarki samochodowe</a></li>
                        <li><a href="#">Magazyny energii</a></li>
                    </ul>
                </div>

                <div className="footer__content--item">
                    <h3 className="footer__title">Znajdź Nas</h3>
                    <ul className="footer__links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;