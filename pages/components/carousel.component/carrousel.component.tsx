import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type CarouselProps = {
    children: ReactNode[];
    styles:string
  }
  
  
   

const CarrouselComponent = ({ children,styles }:CarouselProps)=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
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
            breakpoint: 1182,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
    <Box className={styles}>
         <h1 className="text-5xl text-white mb-10 pt-10">Ofertas</h1>
         <Slider {...settings} className="overflow-hidden">
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