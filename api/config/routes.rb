Rails.application.routes.draw do
  resources :reviews
  resources :searches
  resources :user_searches
  resources :products
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/scrape', to: 'scraper#index'

end
