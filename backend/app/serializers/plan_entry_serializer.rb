class PlanEntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :order, :start_time, :end_time
  belongs_to :day
  has_many :activities
end
