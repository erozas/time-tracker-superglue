class PostsController < ApplicationController
  allow_unauthenticated_access
  before_action :resume_session, only: [:index, :show]
  before_action :use_jsx_rendering_defaults

  def index
    @posts = Post.all
  end

  def show
    @post = Post.friendly.find(params[:id])
  end
end