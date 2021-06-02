class Idea < ApplicationRecord
  belongs_to :activity
  belongs_to :trip
  has_many :votes
end
