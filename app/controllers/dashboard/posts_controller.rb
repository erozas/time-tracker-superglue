class Dashboard::PostsController < ApplicationController
  before_action :use_jsx_rendering_defaults
  
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end
end