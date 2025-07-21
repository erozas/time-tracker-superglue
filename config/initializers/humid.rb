require 'humid'

Humid.configure do |config|
  # Path to your build file located in `app/assets/build/`. You should use a
  # separate build apart from your `application.js`.
  #
  # Required
  config.application_path = Rails.root.join('public', 'builds', 'server_rendering.js')
  config.source_map_path = Rails.root.join("public", "builds", "server_rendering.js.map")

  # Path to your source map file
  #
  # Optional
  # config.source_map_path = Rails.root.join('app', 'assets', 'build', 'server_rendering.js.map')

  # Raise errors if JS rendering failed. If false, the error will be
  # logged out to Rails log and Humid.render will return an empty string
  #
  # Defaults to true.
  config.raise_render_errors = Rails.env.development? || Rails.env.test?

  # The logger instance.

  config.logger = Rails.logger

  config.context_options = {
    timeout: 1000,
    ensure_gc_after_idle: 2000
  }
end

if Rails.env.test?
  MiniRacer::Platform.set_flags! :single_threaded
  Humid.create_context
end