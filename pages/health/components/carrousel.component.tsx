import React, { ReactNode, useState } from 'react';
import { Box, IconButton, Paper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type CarouselProps = {
    children: ReactNode[];
  }
  
  
   

const CarrouselComponent = ({ children }:CarouselProps)=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

  return (
    <Box>
         <Slider {...settings} className="overflow-hidden ">
         {React.Children.map(children, (child, index) => (
          <Box className="">
            {child}
          </Box>
        ))}
    </Slider>
    </Box>
  );
}

export default CarrouselComponent