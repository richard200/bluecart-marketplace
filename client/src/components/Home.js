import React from "react";
import Navbar from "./Navbar";
import { Typography, Button } from "@material-ui/core";

function Home() {
  return (
  
    <div>
      <Navbar />
      <div className="Home" style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#F5F5F5",
      }}>
      <div className="Home-header" style={{ 
        marginBottom: "30px",
        textAlign: "center",
      }}>
        <Typography variant="h3" component="h1" style={{ 
          fontWeight: "bold",
          color: "#212121"
        }}>
          BlueCart: The ultimate tool for online shopping
        </Typography>
        <Typography variant="h5" component="h2" style={{ 
          color: "#757575"
        }}>
         BlueCart helps you find the best deals and products from various e-commerce sites. You can compare prices, ratings, delivery costs, and more with our smart algorithms. 
        </Typography>
        <Button variant="contained" color="primary" href="/search" style={{ 
          marginTop: "20px"
        }}>
          Start shopping
        </Button>
      </div>
      <div className="Home-image" style={{ 
        textAlign: "center",
      }}>
        <img src="shopcrawl-screenshot.png" alt="Shopcrawl screenshot" width="800px" style={{ 
          maxWidth: "100%",
          height: "auto"
        }} />
      </div>
      <div className="Home-testimonials" style={{ 
        marginTop: "30px",
        marginBottom: "30px",
        textAlign: "center",
      }}>
        <Typography variant="h4" component="h3" style={{ 
          fontWeight: "bold",
          color: "#212121"
        }}>
          What our customers say
        </Typography>
        <div className="Home-testimonials-grid" style={{ 
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "20px",
        }}>
          <div className="Home-testimonial-card" style={{ 
            width: "300px",
            height: "350px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img src="customer-1.jpg" alt="Customer 1" width="100px" style={{ 
              borderRadius: "50%",
              marginBottom: "20px"
            }} />
            <Typography variant="body1" component="p" style={{ 
              color: "#757575",
              marginBottom: "20px"
            }}>
              "Bluecart is amazing! It saves me so much time and money when I shop online. I love how it shows me the best deals and products from different sites in one place."
            </Typography>
            <Typography variant="body2" component="p" style={{ 
              fontWeight: "bold",
              color: "#212121"
            }}>
              - Anna Smith
            </Typography>
          </div>
          <div className="Home-testimonial-card">
        <img src="customer-2.jpg" alt="Customer 2" width="100px"/>
        <Typography variant="body1" component="p" style={{color: "#757575"}}>
          “I use BlueCart every time I need to buy something online. It’s so easy and convenient to compare prices, ratings, delivery costs, and more. It helps me make smarter buying decisions.”
        </Typography>
        <Typography variant="body2" component="p" style={{fontWeight: "bold", color: "#212121"}}>
          - John Lee
        </Typography>
      </div>
      <div className="Home-testimonial-card">
        <img src="customer-3.jpg" alt="Customer 3" width="100px"/>
        <Typography variant="body1" component="p" style={{color: "#757575"}}>
          “BlueCart is the best app for online shopping. It has everything I need to find the perfect products for me. It also has a great customer service team that is always ready to help.”
        </Typography>
        <Typography variant="body2" component="p" style={{fontWeight: "bold", color: "#212121"}}>
          - Lisa Chen
        </Typography>
      </div>
    </div>
  </div>
  <div className="Home-footer">
    <div className="Home-footer-links">
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
    <Typography variant="body2" component="p" style={{color: "#757575"}}>
      © 2023 BlueCart. All rights reserved.
    </Typography>
  </div>
  </div>
</div>);
}
export default Home;