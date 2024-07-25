import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logoData = [
  { src: "https://i.ibb.co.com/PMMG9KS/logo-c-1.png", alt: "Logo 1" },
  { src: "https://i.ibb.co.com/sVfB6FM/logo-c-2.png", alt: "Logo 2" },
  { src: "https://i.ibb.co.com/FVvtkJt/logo-c-3.png", alt: "Logo 3" },
  { src: "https://i.ibb.co.com/bKMhrds/logo-c-4.png", alt: "Logo 4" },
  { src: "https://i.ibb.co.com/5xGfLWY/logo-c-5.png", alt: "Logo 5" },
  { src: "https://i.ibb.co.com/sCTQcft/logo-c-6.png", alt: "Logo 6" },
  { src: "https://i.ibb.co.com/PsyYXXS/logo-c-7.png", alt: "Logo 7" },
  { src: "https://i.ibb.co.com/JvJbmLk/logo-c-8.png", alt: "Logo 8" },
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-2 justify-center items-center">
      <div className="logo-carousel">
        <Slider {...settings}>
          {logoData.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
