class Vote < ApplicationRecord
  belongs_to :suggest
  belongs_to :user
end
