Rails.application.routes.draw do
  resources :plan_entries, only: :index
  resources :days, only: :index
  resources :votes, only: :index
  resources :suggests, only: :index
  resources :collaborators, only: :index
  resources :activities, only: :index
  resources :trips
  resources :users, only: [:index, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
