import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // for smooth fade transition
    arrows: true,
    pauseOnHover: true,
  };

  // Slider images and details
  const slides = [
    {
      id: 1,
      image: "/slide1.jpg.jpeg", // Corrected path for public folder image
      caption: "Delicious Recipes from Chef",
    },
    {
      id: 2,
      image: "/slide2.jpg.jpeg",
      caption: "Amazing Dishes with Fresh Ingredients",
    },
    {
      id: 3,
      image: "/slide3.jpg.jpeg", // Corrected path
      caption: "Exquisite Gourmet Meals",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative bg-black h-[600px] sm:h-[700px] lg:h-[800px] flex justify-center items-center"
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
