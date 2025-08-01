class SessionsController < ApplicationController
  before_action :use_jsx_rendering_defaults
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
    @user = User.new
  end

  def create
    if user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for user
      redirect_to dashboard_index_path, notice: "Signed in successfully"
    else
      redirect_to new_session_path, alert: "Try another email address or password."
    end
  end

  def destroy
    terminate_session
    flash[:notice] = "Signed out successfully"
    redirect_to new_session_path
  end
end
