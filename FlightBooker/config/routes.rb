Rails.application.routes.draw do
  root to: 'flights#index'
  resources :flights, only: :index
  resources :bookings, only: [:new, :create, :show, :index] do
    get 'search', on: :collection
  end
end
