import React from "react";
import "./Business.css";
import images from "../../constants/images";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Business = () => {
    return(
        <div className="business section__padding">
            <div className="container flex">
                <div className="business__content--left">
                    <h4 className="section__title">Solars - tradycja i nowoczesność</h4>
                    <p className="description__text text__grey">Solars to firma o długiej historii, której rozwój zapoczątkowany został ponad 30 lat temu, jeszcze przed dynamicznym wzrostem polskiego rynku.
                    Nasza wizja zaowocowała wiodącą pozycją na rynku produkcji i dystrybucji kolektorów słonecznych, pomp ciepła oraz systemów fotowoltaicznych. Energia ze Słońca stanowi dla nas nie 
                    tylko fundament działania, ale również źródło inspiracji do ciągłego rozwoju i wspierania zrównoważonego rozwoju.</p>
                    <div className="boss__description">
                        <p className="description__text boss__text"><span><FaQuoteLeft/></span> Moim celem jest zapewnienie Klientom kompleksowych rozwiązań, które nie tylko spełniają ich bieżące potrzeby, 
                        ale także przyczyniają się do ochrony środowiska naturalnego i oszczędności zasobów. Dążę do tego, by nasze produkty były dostępne dla jak najszerszej grupy odbiorców, zachęcając ich 
                        do wykorzystania energii odnawialnej i dbania o ekologię.<span>&nbsp;<FaQuoteRight /></span></p>
                        <h2 className="boss__name fw__6">Adam Kowalczyk</h2>
                        <h3 className="boss__position fw__5">założyciel i prezes zarządu firmy Solars</h3>
                    </div>
                </div>
                <div className="business__content--right flex__center">
                    <img src={images.boss} alt="" className="image" />
                </div>
            </div>
        </div>
    )
}

export default Business;