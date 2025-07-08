class User < ApplicationRecord
  extend FriendlyId
  friendly_id :username, use: :slugged

  has_secure_password
  has_many :sessions, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
