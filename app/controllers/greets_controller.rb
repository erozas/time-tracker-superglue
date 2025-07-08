class GreetsController < ApplicationController
  before_action :use_jsx_rendering_defaults
  allow_unauthenticated_access only: %i[ show ]

  def show
  end
end