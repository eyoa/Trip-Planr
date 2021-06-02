class Idea < ApplicationRecord
  belongs_to :activity
  belongs_to :trip
  has_many :votes

  accepts_nested_attributes_for :votes
end
