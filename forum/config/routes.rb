Rails.application.routes.draw do
  root "youtube#index"

  resources :posts
  resources :youtube
end
