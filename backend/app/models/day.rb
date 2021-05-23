class Day < ApplicationRecord
  belongs_to :trips
  has_many :plan_entries
end
