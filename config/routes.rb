Rails.application.routes.draw do
  resources :users
  resources :categories

  resources :users do
    resources :transactions
  end

  resources :users do
    resources :saving_goals
  end

  resources :users do
    resources :incomes
  end

  get "/signin", to: "sessions#new"
  post "/sessions/create", to: "sessions#create"
  get "/auth/facebook/callback", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  root 'users#index'
end
