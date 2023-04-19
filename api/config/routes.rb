Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Route to create a new user
  post '/signup', to: 'users#create'

  post '/login', to: 'auth#create'

  get '/users/all' , to: 'users#index'

  # Defines the root path route ("/")
  # root "articles#index"
end
