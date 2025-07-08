class PagesController < ApplicationController
  allow_unauthenticated_access only: %i[ home ]
  before_action :resume_session, only: %i[ home ]
  
  before_action :use_jsx_rendering_defaults
  superglue_template "application/superglue"
  
  def home
  end
end