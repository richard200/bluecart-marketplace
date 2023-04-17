import React from 'react';

const About = () => {
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  };

  return (
    <div>
      <h2 style={headingStyle}>About BlueCart!</h2>
      <p style={paragraphStyle}>At BlueCart!, we help you Compare Prices in Kenya and shop online from hundreds of thousands of different products. We are here to help you save money and stay informed about the price and availability of stuff. BlueCart! is a machine built for catching up-to-date prices, deals in Kenya and product information from serious, trustworthy online stores that sell original and high quality products. Our machine and shoppers work hand in hand to make sure that what you see on BlueCart! is worth your time. We are impartial and will remain so forever. So, we display products to you based on best price in Kenya and do not favor an online store over another. This is how comparison shopping should be: Impartial.</p>
      <p style={paragraphStyle}>There are over 400,000 things you can buy from here, covering everything you would find in the biggest malls in Kenya, including the latest available phones, tablets, computers, laptops, gadgets, televisions, electronics, HiFi, home appliances, men's and women's fashion, beauty, pharmaceuticals, kids' and baby stuff, and even hardware and auto accessories. Some of the popular stores we host include Kilimall, Jumia, and dozens more. Some of the popular brands you'd find include Apple, Samsung, HTC, Nokia, Sony, HP, Dell, Toshiba, Lenovo, Nikon, and Infinix. You'd also find the latest prices of iPhone 11 Pro and the iPhone 11 Pro Max, Nokia 6.1, Nokia 8, lenovo K6 note, Samsung Galaxy A6 plus, HTC desire 12, HTC desire 12 plus, Sony Xperia XZ2, Sony Playstation 4, and Microsoft Xbox. If it is sold online (and it's legal) then you will find it on BlueCart!</p>
      <p style={paragraphStyle}>We do not include every online store in Kenya on BlueCart! We have filtering criteria that ensure that online stores meet minimum quality requirements. We do so to provide the best shopping experience for our users. Besides credit cards and online payment methods, most of our online stores provide the cash on delivery option, meaning that you only pay upon the delivery of your ordered product. Go ahead and try us to get the cheapest price and best deals in Kenya. Happy shopping!</p>
      <p style={paragraphStyle}>If you are an online store and wish to be included on BlueCart!, please drop us a line at contact@BlueCart.com.</p>
    </div>
  );
}

export default About;
