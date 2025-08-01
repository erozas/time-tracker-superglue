Rails.application.routes.draw do
  resource :session
  resources :passwords, param: :token
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  resource :greet, only: [:show]
  resources :projects
  resources :dashboard, only: [:index]
  get "dashboard/posts" => "dashboard/posts#index", as: :dashboard_posts
  get "dashboard/posts/:id" => "dashboard/posts#show", as: :dashboard_post
  resources :posts, only: [:index, :new, :create]

  get "blog" => "posts#index", as: :blog
  get "blog/:id" => "posts#show", as: :blog_post
  
  root "pages#home"
end
