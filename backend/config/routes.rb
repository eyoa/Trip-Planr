Rails.application.routes.draw do
  resources :users, only: [:index, :create]  
  
  resources :trips do
    resources :days, only: [:create, :update, :destroy] do
      resources :entries, except: [:index, :show]
    end
    resources :ideas, only: [:index, :create, :destroy] do
      resources :votes, only: [:create, :destroy]
    end
    resources :collaborators, only: [:create, :destroy]
  end
  

  resources :activities, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
