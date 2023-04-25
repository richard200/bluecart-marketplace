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
        title: "Samsung Galaxy A04s, 6.5\", 64 GB + 4 GB RAM (Dual SIM), 50MP,  5000mAh, Black",
        price: "KSh 17,599",
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/6064321/1.jpg?1258",
        link: "https://jumia.co.ke/samsung-galaxy-a04s-6.5-64-gb-4-gb-ram-dual-sim-50mp-5000mah-black-123460629.html"
      },
      {
        title: "Nokia 105 Africa Edition - 1.77\" - Wireless FM Radio -  800mAh - Black",
        price: "KSh 1,899",
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/1776621/1.jpg?0652",
        link: "https://jumia.co.ke/nokia-105-africa-edition-1.77-wireless-fm-radio-800mah-black-126677179.html"
      },
      {
        title: "Freeyond F9,2GB+64GB,6.52\", 13.0MP,4G Smartphone 5000mAh Dual SIM Android Phone,Blue",
        price: "KSh 9,299",
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/786019/1.jpg?4816",
        link: "https://jumia.co.ke/freeyond-f92gb64gb6.52-13.0mp4g-smartphone-5000mah-dual-sim-android-phoneblue-91068789.html"
      },
      {
        title: "Samsung Galaxy A14 4G, 6.6\", 128GB + 4GB RAM (Dual SIM), 5000mAh, Black",
        price: "KSh 23,799",
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/5911421/1.jpg?1260",
        link: "https://jumia.co.ke/samsung-galaxy-a14-4g-6.6-128gb-4gb-ram-dual-sim-5000mah-black-124119559.html"
      }
    // {
    //   id: 1,
    //   image:
    //     "https://territories.co.ke/wp-content/uploads/2022/06/HP-ProBook-640-G1-Intel-Core-i5-4th-Gen.png",
    //   title: "Laptop",
    //   price: "$499",
    //   link: "/products?query=laptop",
    // },
    // {
    //   id: 2,
    //   image:
    //     "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg",
    //   title: "Smartphone",
    //   price: "$69",
    //   link: "/products?query=smartphone",
    // },
    // {
    //   id: 3,
    //   image:
    //     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //   title: "Watch",
    //   price: "$499",
    //   link: "/products?query=television",
    // },
    // {
    //   id: 4,
    //   image:
    //     "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //   title: "Headphones",
    //   price: "$199",
    //   link: "/products?query=headphones",
    // },
    // {
    //   id: 5,
    //   image:
    //     "https://tvguru.co.ke/wp-content/uploads/2022/07/Samsung-55-BU8000-Crystal-UHD-4K-Smart-LED-TV-55BU8000-1.webp",
    //   title: "Television",
    //   price: "$299",
    //   link: "/products?query=watch",
    // },
  ];

  // Return the JSX for the carousel
  return (
    <div className="carousel">
      <h2>Trending Products</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="carousel-item">
            <a href={item.link}>
              <img src={item.img} alt={item.title} />
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