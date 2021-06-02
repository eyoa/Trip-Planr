class Vote < ApplicationRecord
  belongs_to :idea
  has_many :users
end
