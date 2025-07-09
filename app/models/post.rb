class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  
  validates :title, presence: true

  def formatted_body
    Commonmarker.parse(body)
  end
end
