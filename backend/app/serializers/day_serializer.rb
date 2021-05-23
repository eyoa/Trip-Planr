class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :order
  belongs_to :trips
  has_many :plan_entries
end
