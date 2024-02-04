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
    className: ' gap-1 px-10 [&_.slick-arrow]:w-20 [&_.slick-arrow]:h-full [&_.slick-arrow]:z-10   hover:[&_.slick-arrow]:bg-transparent',
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

export const MovieSlider = ({ title, data }) => {



    return (
        <div className='bg-transparent'>
            <h3 className='text-2xl text-gray-50 mb-4'>
                Featured Items
            </h3>

            <div className='w-full  [&_.slick-list]:overflow-visible  [&_.slick-track]:flex [&_.slick-track]:gap-1'>
                <Slider {...settings}>
                    {data.map((movie, index) => (
                        <Moviecard data={movie} key={index} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}