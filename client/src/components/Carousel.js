import React from "react";

// Import the Slider component from react-slick
import Slider from "react-slick";

// Import the CSS files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the Carousel component
const Carousel = () => {
  // Define some settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Define some dummy data for the carousel items
  // You can replace this with your own data from an API or a state
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1572116469696-32cf0c9e8f66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Laptop",
      price: "$999",
      link: "/products?query=laptop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Smartphone",
      price: "$699",
      link: "/products?query=smartphone",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Television",
      price: "$499",
      link: "/products?query=television",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Headphones",
      price: "$199",
      link: "/products?query=headphones",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Watch",
      price: "$299",
      link: "/products?query=watch",
    },
  ];

  // Return the JSX for the carousel
  return (
    <div className="carousel">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="carousel-item">
            <a href={item.link}>
              <img src={item.image} alt={item.title} />
              <div className="carousel-item-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel