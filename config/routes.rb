Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/clients/verify", to: "clients#verify"
  post "/clients/login",  to: "clients#login"
  resources :clients, only: [:index, :show, :create]


  resources :services, only: [:index, :show]
  put "booking/:id", to: "bookings#update"
  resources :bookings
end
