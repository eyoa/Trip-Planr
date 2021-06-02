class Vote < ApplicationRecord
  has_and_belongs_to_many :idea
  has_and_belongs_to_many :user
end
