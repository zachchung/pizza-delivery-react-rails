Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # API
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :orders, only: [ :index, :create ]
    end
  end
end
