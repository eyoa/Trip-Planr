class Vote < ApplicationRecord
  belongs_to :suggest, :user
end
