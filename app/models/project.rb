class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true

  has_many :tasks, dependent: :destroy

  accepts_nested_attributes_for :tasks
end
