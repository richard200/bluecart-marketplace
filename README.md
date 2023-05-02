! [Homepage] (![bluecart](https://user-images.githubusercontent.com/91524542/235576480-add4379b-464f-4eda-825a-6b3971cf1567.png))
# Bluecart-marketplace
This's a web application that allows users to compare products from different e-commerce sites and find the best deal based on their preferences. Users can query a product and see the results from various shopping sites, ranked by price. Users can also filter the results by various criteria, such as shipping cost, ratings, quality and more. Users can also see reviews and comments from previous buyers for each product. Users can use the service without logging in or creating an account, but registered users can also save their search history for future reference.

## Features
* Query a product and see the results from different e-commerce sites
* Filter the results by various criteria
* See reviews and comments from previous buyers for each product
* Use the service without logging in or creating an account
* Save your search history for future reference



# Usage
### Querying products and seeing results from different e-commerce sites
The main page of the application displays a search box where you can enter a product name and click the search button. You will see a list of results from different e-commerce sites, such as Amazon, eBay, Shopify and Alibaba, ranked by price. You can scroll through the list and click on any product to view its details.

### View one product and adding to filters
Click on a product image to go to the page for that specific product and see more information about it, such as its price, shipping cost, ratings, quality and a link to the original site. Add a product to your filters by clicking on the filter button on the product page. You will see a sidebar with various filter options that you can select and apply to narrow down your results.

### Filters page
On the filters page you will find a list of all the products that match your filter criteria. If you click on the product image, you will be redirected to the product itself where you can see more details. On the filters page, below the product image there is a remove button that will remove the product from the filters list.

### Saving search history
To save your search history for future reference, you will need to create an account and log in. To do that, click on the login button or the sign up button at the top right corner of the page and enter your credentials or create an account. Once you are logged in, your search history will be automatically saved and accessible from your profile.

### Viewing reviews and comments from previous buyers
To view reviews and comments from previous buyers for a product, navigate to the product’s detail page by clicking on its image. Scroll down to the reviews and comments section and you will see a list of feedback from previous buyers that are available on the original site. You can click on a review or comment to see more details about it, such as the reviewer’s name, rating, date and content.

### Restrictions
 
 * The app only supports four e-commerce sites:Other sites may not be compatible with the app’s API.
 * The app only ranks the results by price. Other ranking criteria may be added in future versions
 * add a like to a video.
 * The app only shows reviews and comments from previous buyers that are available on the original site. The app does not collect or store any user feedback.
 * The app only saves your search history if you are logged in. If you use the service without logging in or creating an account, your search history will not be saved or accessible.

# Prerequisites
You will need the following tools installed on your system:

* Ruby 2.7.4
* Bootsrap - CSS framework for responsive design
* ionic icons - Icon toolkit for web applications Credits
* Rails 6.1.4
* PostgreSQL 13.4
* Node.js 14.17.6
* React 17.0.2
* Redux Toolkit 1.6.1
* Jest 27.2.4

## installation and Usage
Clone the repository:

git clone https://github.com/richard200/bluecart-marketplace.git
```
Navigate to the project directory:
```
cd bluecart-marketplace
```
Install the dependencies:
```
bundle install
```
npm install
```
Create and setup the database:
```
rails db:create
```
rails db:migrate
```
rails db:seed # optional, to populate some sample data
```
Start the Rails server:
```
rails s
```
Start the React server:
```
npm start:
```
You can now access the app at http://localhost:4000.


# Links
[Deployed Site] (https://bluecart-marketplace-backend.onrender.com/)

# Authors
* Makena].(https://github.com/MakenaG)
* [Richard] (https://github.com/richard200)
* [Kendrik]
* [Spencer]
* [Sunduz]
* [Kifaa]

# Contributing
If you would like to contribute to this project, please follow the standard Gitflow workflow:

* Fork the repository and create a new branch.
* Make your changes and commit them to your branch.
* Create a pull request from your branch to the main repository.

# Deployment
To deploy the app to Heroku, follow these steps:

* Create a Heroku account and install the Heroku CLI.
* Login to Heroku and create a new app.
* Add the Heroku remote to your local repository.
* Push your code to Heroku.
* Run the database migrations on Heroku.
* Open your app on Heroku.
For more details, see https://devcenter.heroku.com/articles/getting-started-with-rails6.

# Built With
* Ruby on Rails - The web framework used for the backend.
* PostgreSQL - The database used for storing data.
* React - The library used for building the user interface.
* Redux Toolkit - The library used for managing the application state.
* Jest - The testing framework used for both backend and frontend tests.
* Figma - The tool used for creating wireframes and mockups.

# License
This project is licensed under the MIT License - 
```
MIT License

Copyright (c) 2023 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
