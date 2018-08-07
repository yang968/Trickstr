Rails.application.routes.draw do
  resources :users
  root to: 'static_pages#root'
end
