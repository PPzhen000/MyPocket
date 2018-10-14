Rails.application.routes.draw do
  resources :users
  resources :categories
  resources :transactions

  resources :categories do
    resources :transactions
  end

  get "/signin", to: "sessions#new"
  post "/sessions/create", to: "sessions#create"
  get "/auth/facebook/callback", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  root 'users#index'
end
