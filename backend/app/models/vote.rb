class Vote < ApplicationRecord
  belongs_to :activity
  belongs_to :trip
end
