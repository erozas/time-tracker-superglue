class ApplicationController < ActionController::Base
  include Authentication
  include Pagy::Backend
  helper_method :current_user, :user_signed_in?
  
  # Enables Superglue rendering defaults for sensible view directories.
  #
  # without `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #  - index.jsx
  #  - index.json.props
  #  - index.html.erb
  # ```
  #
  # with `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #   - index.jsx
  #   - index.json.props
  # ```
  #
  # before_action :use_jsx_rendering_defaults
  #
  #
  # The html template used when `use_jsx_rendering_defaults` is enabled.
  # Defaults to "application/superglue".
  #
  # superglue_template "application/superglue"

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  private
  
  def current_user
    @current_user ||= Current.user
  end

  def user_signed_in?
    current_user.present?
  end
end
