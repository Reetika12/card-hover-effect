import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Styles/CardHover.css"

const AnimateOnScroll = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
 
        return (
            <div className="apps">
                <div className="grids">
                    <div data-aos="bottom-top"className="boxes">1</div>
                    <div data-aos="flip-left"className="boxes">2</div>
                    <div data-aos="fade-down" className="boxes">3</div>
                    <div data-aos="fade-right" className="boxes">4</div>
                    <div data-aos="fade-left" className="boxes">5</div>
                    <div data-aos="fade-in" className="boxes">6</div>
                    <div data-aos="zoom-out" className="boxes">7</div>
                    <div data-aos="fade-up" className="boxes">8</div>
                </div>
            </div>
        )
}

export default AnimateOnScroll
