"use client"
import Moviecard from '../cards/movieCard';
import { useState } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    className: 'px-10',
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const MovieSlider = ({ childre, data }) => {



    return (
        <div className='w-full px-10'>
            <Slider {...settings}>
                {data.map((movie, index) => (
                    <Moviecard data={movie} key={index} />
                ))}
            </Slider>
        </div>
    );
}