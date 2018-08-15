Rails.application.routes.draw do
  resources :follows
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy] do
      resources :likes, only: [:index]
    end

    resource :session, only: [:new, :create, :destroy]

    resources :posts, except: [:new, :edit] do
      resources :likes, only: [:index]
    end

    resources :likes, only: [:create, :destroy]
  end

end
