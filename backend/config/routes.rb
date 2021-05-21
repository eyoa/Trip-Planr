Rails.application.routes.draw do
  resources :plan_entries
  resources :days
  resources :votes
  resources :suggests
  resources :collaborators
  resources :activities
  resources :trips
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
