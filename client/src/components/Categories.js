import React from "react";

// Import the CSS file for styling


// Define the Categories component
const Categories = () => {
  // Define some dummy data for the categories or brands
  // You can replace this with your own data from an API or a state
  const data = [
    {
      id: 1,
      name: "Phones",
      icon: "https://img.icons8.com/ios-filled/50/000000/electronics.png",
      link: "/products?category=phones",
    },
    {
      id: 2,
      name: "Fashion",
      icon: "https://img.icons8.com/ios-filled/50/000000/fashion.png",
      link: "/products?category=fashion",
    },
    {
      id: 3,
      name: "Home and Kitchen",
      icon: "https://img.icons8.com/ios-filled/50/000000/home.png",
      link: "/products?category=home-and-kitchen",
    },
    {
      id: 4,
      name: "Books and Stationery",
      icon: "https://img.icons8.com/ios-filled/50/000000/book.png",
      link: "/products?category=books-and-stationery",
    },
    {
      id: 5,
      name: "Health and Beauty",
      icon: "https://img.icons8.com/ios-filled/50/000000/health-book.png",
      link: "/products?category=health-and-beauty",
    },
  ];

  // Return the JSX for the categories section
  return (
    <div className="categories">
      <h2>Popular Categories</h2>
      <div className="categories-grid">
        {data.map((item) => (
          <div key={item.id} className="category-card">
            <a href={item.link}>
              <img src={item.icon} alt={item.name} />
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;