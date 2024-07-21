import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './carousel.scss'

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    return (
        <>
            <div className="carousel">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                {data.map((item, idx) => {
                    return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide-hidden"} />
                })}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {data.map((_, idx) => {
                        return <button onClick={() => setSlide(idx)} key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"} ></button>
                    })}
                </span>
            </div>
        </>
    )
}

Carousel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Carousel;


