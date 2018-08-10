Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]

    resource :session, only: [:new, :create, :destroy]

    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end

end
