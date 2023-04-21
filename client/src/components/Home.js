import React from "react";
import Navbar from "./Navbar";
import {
  Typography,
  Button,
  Grid,
  Icon,
  Badge,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="Home"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div className="Home-header" style={{ marginBottom: "30px", textAlign: "center" }}>
          <Typography variant="h3" component="h1" style={{ fontWeight: "bold", color: "#212121" }}>
            BlueCart: The Ultimate Tool for Online Shopping
          </Typography>
          <Typography variant="h5" component="h2" style={{ color: "#757575" }}>
            BlueCart helps you find the best deals and products from various e-commerce sites. Our smart algorithms compare
            prices, ratings, delivery costs, and more, saving you time and money when you shop online.
          </Typography>
          <Button variant="contained" color="primary" href="/search" style={{ marginTop: "20px" }}>
            Start Shopping
          </Button>
        </div>
        <SearchBar />
        <FilterBar />
        <div className="Home-image" style={{ textAlign: "center" }}>
          <img
            src="shopcrawl-screenshot.png"
            alt="Shopcrawl screenshot"
            width="800px"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="Home-products" style={{ marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345px" }}>
                <CardMedia image="product1.jpg" title="Product 1" style={{ height: "140px" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Product 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This is a brief description of product 1. It has some amazing features and benefits that you will love.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Icon color="primary">star</Icon>
                  <Typography variant="body2" color="primary" component="p">
                    4.5/5
                  </Typography>
                  <Icon color="secondary">local_shipping</Icon>
                  <Typography variant="body2" color="secondary" component="p">
                    Free Delivery
                  </Typography>
                  <Badge badgeContent={4} color="error">
                    <Icon>compare_arrows</Icon>
                  </Badge>
                  <Typography variant="body2" component="p">
                    Compare Prices
                  </Typography>
                </CardActions>
                <CardActions>
                  <Button size="small" color="primary">
                    Buy Now
                  </Button>
                  <Button size="small" color="primary">
                    Visit Site
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Repeat for other products */}
          </Grid>
        </div>
        <div className="Home-footer">
  <Typography variant="h6" component="h2" style={{ fontWeight: "bold", color: "#212121", marginBottom: "10px" }}>
   Shopping Online Kenya
  </Typography>
  <Typography variant="body1" component="p" style={{ color: "#757575" }}>
  At BlueCart, we help you compare prices and shop online from hundreds of thousands of different products in Kenya. We are here to help you save money and stay informed about the price and availability of items. Our platform aggregates products from serious, trustworthy online stores that sell original and high-quality products, so you can shop with confidence.

Our machine and shoppers work hand in hand to make sure that what you see on BlueCart is worth your time. We are impartial and will remain so forever. We display products to you based on the best price in Kenya and do not favor an online store over another. This is how comparison shopping should be: impartial.

You can find over 400,000 things to buy on BlueCart, covering everything you would find in the biggest malls in Kenya, including the latest available phones, tablets, computers, laptops, gadgets, televisions, electronics, HiFi, home appliances, men's and women's fashion, beauty, pharmaceuticals, kids' and baby stuff, and even hardware and auto accessories. Some of the popular stores we host include Kilimall, Jumia, and dozens more. Some of the popular brands you'd find include Apple, Samsung, HTC, Nokia, Sony, HP, Dell, Toshiba, Lenovo, Nikon, and Infinix. You'd also find the latest prices of iPhone 11 Pro and the iPhone 11 Pro Max, Nokia 6.1, Nokia 8, Lenovo K6 note, Samsung Galaxy A6 plus, HTC desire 12, HTC desire 12 plus, Sony Xperia XZ2, Sony Playstation 4, and Microsoft Xbox. If it is sold online (and it's legal) then you will find it on BlueCart!

We have filtering criteria that ensure that online stores meet minimum quality requirements. We do so to provide the best shopping experience for our users. Besides credit cards and online payment methods, most of our online stores provide the cash on delivery option, meaning that you only pay upon the delivery of your ordered product. Go ahead and try us to get the cheapest price and best deals in Kenya. Happy shopping with BlueCart!
  </Typography>
</div>
</div>
</div>
);
      }
export default Home;