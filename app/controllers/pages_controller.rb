class PagesController < ApplicationController
  allow_unauthenticated_access only: %i[ home ]
  before_action :resume_session, only: %i[ home ]
  before_action :redirect_to_dashboard_if_signed_in
  
  before_action :use_jsx_rendering_defaults
  superglue_template "application/superglue"
  
  def home
  end

  private

  def redirect_to_dashboard_if_signed_in
    redirect_to dashboard_index_path if user_signed_in?
  end
end