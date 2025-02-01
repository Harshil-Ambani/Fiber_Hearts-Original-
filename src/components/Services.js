import React, { useState, useEffect } from "react";

const CuisineSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real image (index 1 in extendedData)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cuisinesData = [
    { name: "Chinese", image: "/chinese.jpeg" },
    { name: "Italian", image: "/italian.jpeg" },
    { name: "Indian", image: "/indian.jpeg" },
    { name: "Mexican", image: "/mexican.jpeg" },
    { name: "Thai", image: "/thai.jpg" },
  ];

  const totalCuisines = cuisinesData.length;

  // Extended data with clones for seamless looping
  const extendedData = [
    cuisinesData[totalCuisines - 1], // Clone last image at the start
    ...cuisinesData,
    cuisinesData[0], // Clone first image at the end
  ];

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Reset position if we've reached the clone
    if (currentIndex === totalCuisines + 1) {
      setCurrentIndex(1); // Jump back to the first real image
    } else if (currentIndex === 0) {
      setCurrentIndex(totalCuisines); // Jump to the last real image
    }
  };

  const realIndex = currentIndex === 0
    ? totalCuisines - 1
    : currentIndex === totalCuisines + 1
    ? 0
    : currentIndex - 1;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>
        Craving{" "}
        <span style={{ color: "red" }}>
          {cuisinesData[realIndex]?.name || "Loading..."}
        </span>{" "}
        food? Our Multi-Cuisine Experts Have Got You!
      </h1>

      {/* Image Slider */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "350px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${extendedData.length * 100}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedData.map((cuisine, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 100%", // Each image takes up the entire frame
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.5s ease",
                  boxShadow:
                    index === currentIndex
                      ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                      : "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={cuisine.image}
                  alt={`${cuisine.name} cuisine`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisineSection;
