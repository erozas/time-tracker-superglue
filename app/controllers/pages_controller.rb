class PagesController < ApplicationController
  before_action :use_jsx_rendering_defaults
  superglue_template "application/superglue"
  
  def home
  end
end