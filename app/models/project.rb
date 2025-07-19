class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true

  has_many :tasks, dependent: :destroy

  scope :recent, -> { order(created_at: :desc) }

  accepts_nested_attributes_for :tasks

  def self.search(search)
    return [] if search.blank?

    if search
      where("UPPER(name) LIKE UPPER(?)", "%#{search}%")
    else
      all
    end
  end
end
